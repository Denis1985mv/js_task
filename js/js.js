let valueBalanc = prompt("Введите баланс на закупку телефонов: ");
let mounth = prompt("Введите на сколько месяцев сделать расcчет: ");
const valueTelephone = Number(prompt("Введите стоимость телефона: "));
const valueaAccess = Number(prompt("Введите стоимость аксессуаров: "));
const taxnds = Number(prompt("Введите налог(в %): ")) / 100;

let count = 0;
let countBalance = 0;
let result = 0;
let x = 0;
let resultAcss = 0;
let countAcss = 0;
let xAcss = 0;
let countBalanceAcss = 0;
let valBalanceaAcsstaxs = 0;
let totalBalance = 0;
let mounthIter = 0;
let mounthIterVel = 1;

while (mounth > mounthIter) {
  if (valueBalanc >= 0) {
    let valueCo = prompt(
      `Месяц ${mounthIterVel} Сколько телефонов Вы хотите купить
      (стоимость одного телефона -${valueTelephone} рб), на балансе 
      еще осталось ${valueBalanc} рб (с учетом вычета налогов):`
    );
    let valueCount = Number(valueCo);

    x = 0;
    result = 0;
    count = 0;
    countBalance = 0;
    while (x < valueCount) {
      result = valueTelephone;
      count += result;
      countBalance = Number(count);
      ++x;

      console.log(result);
    }

    valueBalanc = valueBalanc - countBalance;
    let valBalancetaxs = countBalance * taxnds;
    let totalBalanceTel = valueBalanc - valBalancetaxs;

    document.write(`Месяц ${mounthIterVel}. Сумма закупки ${countBalance.toFixed(
      2
    )} рб, 
    остаток Вашего баланса составляет ${valueBalanc.toFixed(2)} рб, 
    количество телефонов которые Вы купили ${x} шт, налог НДС составил ${valBalancetaxs.toFixed(
      2
    )} рб, 
    остаток на балансе после вычета налогов ${totalBalanceTel.toFixed(2)} рб`);

    valueBalanc = valueBalanc - valBalancetaxs;

    let valueAcss = prompt(
      "Если Вы хотите докупить аксессуары нажмите 1 \n если нет то нажмите 2(или любую цифру кроме 1)"
    );

    xAcss = 0;
    if (valueAcss <= 1 && valueAcss > 0) {
      let valueCoAcss = prompt(
        `Сколько аксессуаров Вы хотите купить (стоимость 1шт = ${valueaAccess} рб):`
      );

      resultAcss = 0;
      countAcss = 0;
      countBalanceAcss = 0;
      while (xAcss < valueCoAcss) {
        resultAcss = valueaAccess;
        countAcss += resultAcss;
        countBalanceAcss = Number(countAcss);
        ++xAcss;
      }
    } else {
    }

    valueBalanc = valueBalanc - countBalanceAcss;
    valBalanceaAcsstaxs = countBalanceAcss * taxnds;
    totalBalance = valueBalanc - valBalanceaAcsstaxs;
    console.log("здесь", valBalanceaAcsstaxs);

    document.write("<br>");
    document.write(`Сумма закупки аксессуаров ${countBalanceAcss.toFixed(2)}, 
    остаток Вашего баланса составляет ${valueBalanc.toFixed(2)} рб, 
    Вы купили  количество аксессуаров ${xAcss} шт, налог НДС составил ${valBalanceaAcsstaxs.toFixed(
      2
    )} рб, 
    итоговый баланс после вычета налогов ${totalBalance.toFixed(2)} рб`);
    document.write("<br>");

    valueBalanc = valueBalanc - valBalanceaAcsstaxs;

    console.log(valueBalanc);

    ++mounthIter;
    ++mounthIterVel;
    document.write("<br>");
    countBalanceAcss = 0;
    countBalance = 0;
  } else {
    alert(
      `Не хватает средств, баланс ${valueBalanc} рб. Вы не рассчитали баланс!`
    );
    break;
  }
}
