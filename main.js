const input = document.querySelector('input');
const h1 = document.querySelector('h1');
const rewardBtn = document.querySelector('.addReward');
const punishBtn = document.querySelector('.addPunishment');
const resetBtn = document.querySelector('.reset');
const generRewardBtn = document.querySelector('.generateReward');
const generPunishBtn = document.querySelector('.generatePunishment');
const showBtn = document.querySelector('#show');
input.value = '';
const rewardList = ['Drapanie Karczku', 'Oklep Tyłka', 'Chodź masz', 'Pusi Nusia'];
const punishmentList = ['Szlaban na polko', 'Krzyczenie Mamy', 'Przytulanie Mamy'];
const ulRewards = document.querySelector('#rewards');
const ulPunishments = document.querySelector('#punishments')


const removeButtons = () => {
    const removeRewardBtn = document.querySelector('.removeReward');
    const removePunishmentBtn = document.querySelector('.removePunishment');

    const removeReward = () => {
        console.log('click');
    }

    const removePunishment = () => {
        console.log('click');
    }

    removeRewardBtn.addEventListener('click', removeReward)
    removePunishmentBtn.addEventListener('click', removePunishment)
}

const showOptions = function () {
    if (rewardList.length > 0) {
        ulRewards.textContent = 'Rewards:';
        for (let i = 0; i < rewardList.length; i++) {
            // console.log(rewardList[i]);
            const li = document.createElement('li');
            const x = document.createElement('span');
            x.innerHTML = ' X';
            x.classList = `removeReward${i}`
            ulRewards.appendChild(li);
            li.textContent = rewardList;
            li.appendChild(x);
        }
    }

    if (punishmentList.length > 0) {
        ulPunishments.textContent = 'Punishments:';
        for (let i = 0; i < punishmentList.length; i++) {
            // console.log(punishmentList[i]);
            const li = document.createElement('li');
            const x = document.createElement('span');
            x.innerHTML = ' X';
            x.classList = 'removePunishment'
            ulPunishments.appendChild(li);
            li.textContent = punishmentList[i];
            li.appendChild(x);
        }
    }
    removeButtons();
}


const addReward = function (e) {
    e.preventDefault();
    if (input.value) {
        // for (let reward of rewardList) {
        //     if (reward === input.value)
        //         console.log('Same value');
        //     // return
        // }
        // console.log('Reward Added');
        rewardList.push(input.value);
        input.value = '';
        showOptions();
    }
}
const addPunishment = function (e) {
    e.preventDefault();
    if (input.value) {
        console.log('Punishment Added');
        punishmentList.push(input.value);
        input.value = '';
        showOptions();

    }
}

const reset = function (e) {
    e.preventDefault();
    console.log('Options cleared')
    rewardList.length = 0;
    punishmentList.length = 0;
    h1.textContent = '';
    ulRewards.textContent = '';
    ulPunishments.textContent = '';
    showOptions();

}
const generateReward = () => {
    if (rewardList.length > 0) {
        console.log('Reward Generated')
        const index = Math.floor(Math.random() * rewardList.length);
        h1.textContent = '';
        setTimeout(() => {
            h1.textContent = rewardList[index];
        }, 400);
    }
}
const generatePunishment = () => {
    if (punishmentList.length > 0) {
        console.log('Punishment Generated')
        const index = Math.floor(Math.random() * punishmentList.length);
        h1.textContent = '';
        setTimeout(() => {
            h1.textContent = punishmentList[index];
        }, 400);
    }
}



const options = () => {

    if (showBtn.textContent === 'Show options') {
        showBtn.textContent = 'Hide Options'
        showOptions();
        ulRewards.style.display = 'inline-block';
        ulPunishments.style.display = 'inline-block';
    } else {
        showBtn.textContent = 'Show options';
        ulRewards.style.display = 'none';
        ulPunishments.style.display = 'none';
    }
}



rewardBtn.addEventListener('click', addReward);
punishBtn.addEventListener('click', addPunishment);
resetBtn.addEventListener('click', reset);
generPunishBtn.addEventListener('click', generatePunishment);
generRewardBtn.addEventListener('click', generateReward);
showBtn.addEventListener('click', options);