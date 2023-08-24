function unix(timestamp, type) {
    const milliseconds = timestamp * 1000
    const dateObj = new Date(milliseconds)

    let result =
        type == 'hour' ? dateObj.toLocaleString('ru-RU', {hour: 'numeric'}) :
        type == 'minute' ? dateObj.toLocaleString('ru-RU', {minute: 'numeric'}) :
        type == 'weekday' ? dateObj.toLocaleString('ru-RU', {weekday: 'long'}) :
        type == 'day' ? dateObj.toLocaleString('ru-RU', {day: 'numeric'}) :
        type == 'month' ? dateObj.toLocaleString('ru-RU', {month: 'long'}) : '';
    return result
}
export default unix