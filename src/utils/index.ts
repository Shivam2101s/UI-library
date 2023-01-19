export function formatPriceAndNumber(price: number, notation:any, style:any) {
    const formatSetting: any = { minimumFractionDigits: 0 };
    if (notation) {
      formatSetting.notation = notation;
    }
    if (style) {
      formatSetting.style = style;
      if (style === 'currency') {
        formatSetting.currency = 'INR';
      }
    }
    const formatter = new Intl.NumberFormat('en-IN', formatSetting);
    return formatter.format(price);
  }