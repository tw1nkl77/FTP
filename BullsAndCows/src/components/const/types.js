export default {
    templatesBulls: {
        getTemplate(item) {
            return `<div class="result-attempt">
                <p>Выбранная вами комбинация: <b>${item.choice}</b>. Быки: <b>${item.bulls}</b>, коровы: <b>${item.cows}</b>. Осталось: <b>${item.left} попыток!</b></p>
            </div>`;
        }
    }
};