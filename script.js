const buttons = document.querySelectorAll(".button");
const activeIndicator = document.querySelector(".active-btn-indicator");
const btnCommit = document.querySelector(".btn-commit");
const btnAnalytics = document.querySelector(".btn-analytics");
const btnUpgrade = document.querySelector(".btn-upgrade");

const pageCommit = document.querySelector(".commit-page");
const btnDetails = document.querySelector(".btn-details");
const btnCloseCommitPage = document.querySelector(".btn-close-commit-page");
const itemSuccess = document.querySelector(".success-item");
const pageSuccessFull = document.querySelector(".success-full-page");
const itemCommit = document.querySelector(".item-commit");
const itemCommitPar = document.querySelector(".item-commit-par");

const pageAnalytics = document.querySelector(".analytics-page");
const btnAnalyticsFull = document.querySelector(".btn-analytics-full");
const btnCloseAnalyticsPage = document.querySelector(".btn-close-analytics-page");
const itemCloseAnalytics = document.querySelector(".analytics-close-item");
const pageAnalyticsFull = document.querySelector(".analytics-full-page");
const itemAnalytics = document.querySelector(".item-analytics");
const onlineNow = document.querySelector(".par-online-now");

const pageUpgrade = document.querySelector(".upgrade-page");
const btnBilling = document.querySelector(".btn-billing");
const itemBillingPage = document.querySelector(".billing-page-item");
const itemUpgradePage = document.querySelector(".upgrade-page-item");
const btnCloseUpgradePage = document.querySelector(".btn-close-upgrade-page");
const btnSeePro = document.querySelector(".btn-see-pro");
const pageUpgradeFull = document.querySelector(".upgrade-full-page");
const itemUpgradePro = document.querySelector(".item-upgrade-pro");
const itemDaysLeft = document.querySelector(".item-days-left");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonRect = button.getBoundingClientRect(); // получаем позицию и размер нажатой кнопки
    const containerRect = button.parentElement.getBoundingClientRect();
    activeIndicator.style.transform = `translateX(${
      buttonRect.left - containerRect.left
    }px)`; // перемещаем к новой нажатой кнопке
    activeIndicator.style.width = `${buttonRect.width}px`;
    activeIndicator.style.height = `${buttonRect.height}px`;
  });
});

//если нажата btn Commit
btnCommit.addEventListener("click", function () {
  if (getComputedStyle(pageCommit).display == "none") {
    openPageCommit();
  }
  if (
    getComputedStyle(itemSuccess).display == "block" ||
    getComputedStyle(itemSuccess).display == "flex"
  ) {
    closeItemSuccess();
    if (getComputedStyle(pageSuccessFull).display == "block") {
      closePageSuccessFull();
    }
  }

  if (getComputedStyle(pageAnalytics).display == "flex") {
    closePageAnalytics();
  }
  if (getComputedStyle(pageAnalyticsFull).display == "block") {
    closePageAnalyticsFull();
  }

  if (getComputedStyle(pageUpgrade).display == "flex") {
    closePageUpgrade();
  }

  if (getComputedStyle(pageUpgradeFull).display == "block") {
    closePageUpgradeFull();
  }
});

//если нажата btn Details
btnDetails.addEventListener("click", function () {
  if (
    // 2-е нажатие btn Details
    getComputedStyle(itemSuccess).display == "flex" &&
    getComputedStyle(pageSuccessFull).display == "none"
  ) {
    openDetails();
  }

  if (getComputedStyle(itemSuccess).display == "none") {
    openItemSuccess();
  }
});

//если нажата btn Close Commit
btnCloseCommitPage.addEventListener("click", function () {
  closePageSuccessFull();
  closeItemSuccess();
});

//если нажата btn Analytics
btnAnalytics.addEventListener("click", function () {
  if (getComputedStyle(pageAnalytics).display == "none") {
    openPageAnalytics();
  }

  if (getComputedStyle(pageAnalyticsFull).display == "block") {
    closePageAnalyticsFull();
  }

  if (getComputedStyle(pageCommit).display == "flex") {
    closePageCommit();
  }

  if (getComputedStyle(pageSuccessFull).display == "block") {
    closePageSuccessFull();
    closeItemSuccess();
  }

  if (getComputedStyle(pageUpgrade).display == "flex") {
    closePageUpgrade();
  }

  if (getComputedStyle(pageUpgradeFull).display == "block") {
    closePageUpgradeFull();
  }
});

//если нажата btn Analytics на вкладке (2-я)
btnAnalyticsFull.addEventListener("click", function () {
  openPageAnalyticsFull();
});

//если нажата btn Close Analytics
btnCloseAnalyticsPage.addEventListener("click", function () {
  closePageAnalyticsFull();
});

//если нажата btn Upgrade
btnUpgrade.addEventListener("click", function () {
  if (getComputedStyle(pageUpgrade).display == "none") {
    openPageUpgrade();
  }

  if (getComputedStyle(itemBillingPage).display == "flex") {
    closePageBilling();
  }

  if (getComputedStyle(pageUpgradeFull).display == "block") {
    closePageUpgradeFull();
  }

  if (getComputedStyle(pageCommit).display == "flex") {
    closePageCommit();
  }

  if (getComputedStyle(pageSuccessFull).display == "block") {
    closePageSuccessFull();
    closeItemSuccess();
  }

  if (getComputedStyle(pageAnalytics).display == "flex") {
    closePageAnalytics();
  }
  if (getComputedStyle(pageAnalyticsFull).display == "block") {
    closePageAnalyticsFull();
  }
});

//если нажата btn Billing
btnBilling.addEventListener("click", function () {
  openPageBilling();
});

btnSeePro.addEventListener("click", function () {
  openPageUpgradeFull();
});

btnCloseUpgradePage.addEventListener("click", function () {
  closePageUpgradeFull();
});

//открываем мини блок commit
function openPageCommit() {
  pageCommit.classList.remove("close");
  pageCommit.classList.add("open");
  itemCommitPar.classList.add("left-effect");
}

//открываем полный блок commit
function openDetails() {
  pageSuccessFull.classList.remove("close-from-top-commit");
  pageSuccessFull.classList.add("open-to-top-commit");
  btnDetails.classList.remove("open");
  btnDetails.classList.add("close");
  btnCloseCommitPage.classList.add("open");
  btnCloseCommitPage.classList.remove("close");
  itemCommit.classList.remove("open"); //чтобы потом добавить удар при закрытии
}

//открываем блок success
function openItemSuccess() {
  pageCommit.classList.remove("close");
  pageCommit.classList.add("open");
  itemSuccess.classList.add("item-success-open");
  itemSuccess.classList.remove("item-success-close");
  btnCloseCommitPage.classList.add("close");
  btnCloseCommitPage.classList.remove("open");
  itemCommit.classList.remove("open"); //чтобы потом добавить удар при закрытии
}

//открываем мини блок аналитики
function openPageAnalytics() {
  pageAnalytics.classList.remove("close");
  pageAnalytics.classList.add("open");
  onlineNow.classList.add("left-effect");
}

//открываем полный блок аналитики
function openPageAnalyticsFull() {
  pageAnalyticsFull.classList.remove("close-from-top");
  pageAnalyticsFull.classList.add("open-to-top");
  itemCloseAnalytics.classList.remove("close");
  itemCloseAnalytics.classList.add("open");
  btnAnalyticsFull.classList.remove("open");
  btnAnalyticsFull.classList.add("close");
  itemAnalytics.classList.remove("open"); //удар при закрытии чтоб потом добавить
}

//открываем мини блок upgrade
function openPageUpgrade() {
  pageUpgrade.classList.remove("close");
  pageUpgrade.classList.add("item-upgrade-open");
  itemDaysLeft.classList.add("left-effect");
}

//открываем мини блок-2 upgrade (billing)
function openPageBilling() {
  itemDaysLeft.classList.remove("left-effect");
  itemUpgradePage.classList.add("item-upgrade-close");
  itemUpgradePage.classList.remove("item-upgrade-open");
  itemBillingPage.classList.add("item-upgrade-open");
  itemBillingPage.classList.remove("item-upgrade-close");

  pageUpgrade.classList.remove("close");
  pageUpgrade.classList.add("item-upgrade-open");

  itemBillingPage.classList.add("left-effect");
  itemUpgradePro.classList.add("bottom-effect");
  itemUpgradePro.classList.add("left-effect");
  btnCloseUpgradePage.classList.add("close-from-top");
  btnCloseUpgradePage.classList.remove("open-to-top");
}

//открываем полный блок upgrade
function openPageUpgradeFull() {
  pageUpgradeFull.classList.add("open-to-top");
  pageUpgradeFull.classList.remove("close-from-top");
  btnCloseUpgradePage.classList.add("open-to-top");
  btnCloseUpgradePage.classList.remove("close-from-top");
  btnSeePro.classList.add("close");
  btnSeePro.classList.remove("open");
}

//закрываем мини блок commit
function closePageCommit() {
  pageCommit.classList.add("close");
  pageCommit.classList.remove("open");
}

//закрываем полный блок commit
function closePageSuccessFull() {
  pageSuccessFull.classList.add("close-from-top-commit");
  pageSuccessFull.classList.remove("open-to-top-commit");
  btnDetails.classList.add("open");
  btnDetails.classList.remove("close");
  itemCommit.classList.add("open"); //добавляем удар при закрытии
}

//закрываем  блок success
function closeItemSuccess() {
  itemSuccess.classList.add("item-success-close");
  itemSuccess.classList.remove("item-success-open");
  itemCommit.classList.add("open"); //добавляем удар при закрытии
}

//закрываем мини блок аналитики
function closePageAnalytics() {
  pageAnalytics.classList.add("close");
  pageAnalytics.classList.remove("open");
}

//закрываем полный блок аналитики
function closePageAnalyticsFull() {
  pageAnalyticsFull.classList.add("close-from-top");
  pageAnalyticsFull.classList.remove("open-to-top");
  itemCloseAnalytics.classList.add("close");
  itemCloseAnalytics.classList.remove("open");
  btnAnalyticsFull.classList.add("open");
  btnAnalyticsFull.classList.remove("close");
  itemAnalytics.classList.add("open"); //добавляем удар при закрытии
}

//закрываем мини блок upgrade
function closePageUpgrade() {
  pageUpgrade.classList.add("close");
  pageUpgrade.classList.remove("item-upgrade-open");
}

//закрываем мини блок-2 upgrade (billing)
function closePageBilling() {
  itemUpgradePage.classList.add("item-upgrade-open");
  itemUpgradePage.classList.remove("item-upgrade-close");
  itemBillingPage.classList.add("item-upgrade-close");
  itemBillingPage.classList.remove("item-upgrade-open");
}

//закрываем полный блок upgrade
function closePageUpgradeFull() {
  pageUpgradeFull.classList.remove("open-to-top");
  pageUpgradeFull.classList.add("close-from-top");
  itemUpgradePage.classList.add("item-upgrade-open");
  itemUpgradePage.classList.remove("item-upgrade-close");
  itemBillingPage.classList.add("item-upgrade-close");
  itemBillingPage.classList.remove("item-upgrade-open");
  btnSeePro.classList.remove("close");
}
