/**
 * Утилиты для генерации микроразметки Schema.org
 */

export interface PriceItem {
  name: string;
  price: string; // например "от 100 000 тг" или "120 000 – 250 000 тг"
  description?: string;
}

/**
 * Парсит цену из строки и возвращает числовое значение
 * Поддерживает форматы: "от 100 000 тг", "120 000 – 250 000 тг", "100 000"
 */
function parsePrice(priceString: string): number | null {
  if (!priceString) return null;
  
  // Удаляем все пробелы и нечисловые символы, кроме цифр и дефисов
  const cleaned = priceString.replace(/\s/g, '').replace(/[^\d–-]/g, '');
  
  if (!cleaned) return null;
  
  // Если есть диапазон (дефис), берем минимальное значение
  if (cleaned.includes('–') || cleaned.includes('-')) {
    const parts = cleaned.split(/[–-]/);
    const minPrice = parts[0] ? parseInt(parts[0], 10) : null;
    return minPrice && !isNaN(minPrice) ? minPrice : null;
  }
  
  // Иначе парсим как одно число
  const price = parseInt(cleaned, 10);
  return !isNaN(price) ? price : null;
}

/**
 * Генерирует микроразметку Offer для цен из таблицы
 */
export function generatePriceMarkupFromTable(
  rows: Array<Record<string, any>>,
  columns: Array<{ key: string; header: string }>,
  productName: string = "Мебель на заказ",
  currency: string = "KZT"
): object {
  // Находим колонки с названием и ценой
  const nameColumn = columns.find(col => 
    col.header.toLowerCase().includes('название') || 
    col.header.toLowerCase().includes('услуга') ||
    col.header.toLowerCase().includes('вид') ||
    col.header.toLowerCase().includes('тип') ||
    col.header.toLowerCase().includes('категория') ||
    col.header.toLowerCase().includes('изделие') ||
    col.header.toLowerCase().includes('позиция') ||
    col.header.toLowerCase().includes('комплектация')
  );
  
  const priceColumn = columns.find(col => 
    col.header.toLowerCase().includes('цена') || 
    col.header.toLowerCase().includes('стоимость') ||
    col.header.toLowerCase().includes('тенге')
  );

  if (!nameColumn || !priceColumn) {
    return {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": productName,
    };
  }

  const offers = rows
    .map((row) => {
      const name = String(row[nameColumn.key] || '');
      const priceStr = String(row[priceColumn.key] || '');
      const price = parsePrice(priceStr);
      
      if (!name || !price) return null;

      return {
        "@type": "Offer",
        "name": name,
        "price": price,
        "priceCurrency": currency,
        "availability": "https://schema.org/InStock",
      };
    })
    .filter((offer) => offer !== null);

  if (offers.length === 0) {
    return {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": productName,
    };
  }

  const prices = offers.map((o: any) => o.price);
  
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": productName,
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": String(offers.length),
      "lowPrice": String(Math.min(...prices)),
      "highPrice": String(Math.max(...prices)),
      "priceCurrency": currency,
      "offers": offers,
    },
  };
}

