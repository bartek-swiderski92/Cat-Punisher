const input = document.querySelector('input');
const h1 = document.querySelector('h1');
const rewardBtn = document.querySelector('.addReward');
const punishBtn = document.querySelector('.addPunishment');
const resetBtn = document.querySelector('.reset');
const generRewardBtn = document.querySelector('.generateReward');
const generPunishBtn = document.querySelector('.generatePunishment');
const showBtn = document.querySelector('#show');
input.value = '';
const rewardList = ['Reward1', 'Reward2', 'Reward3', 'Reward4'];
const punishmentList = ['Punishment1', 'Punishment2', 'Punishment3'];
const ulRewards = document.querySelector('#rewards');
const ulPunishments = document.querySelector('#punishments')


// const removeButtons = () => {
//     const removeRewardBtn = document.querySelector('.removeReward');
//     const removePunishmentBtn = document.querySelector('.removePunishment');

//     const removeReward = () => {
//         console.log(rewardList.indexOf('Reward1'));

//     }

//     const removePunishment = () => {
//         console.log('click');
//     }

//     removeRewardBtn.addEventListener('click', removeReward)
//     removePunishmentBtn.addEventListener('click', removePunishment)
// }

const showOptions = function () {
    ulRewards.textContent = 'Rewards:';
    ulPunishments.textContent = 'Punishments:';
    if (rewardList.length > 0) {
        for (let i = 0; i < rewardList.length; i++) {
            addElemToList(ulRewards, rewardList, 'removeReward', i);
        }
    }
    if (punishmentList.length > 0) {
        for (let i = 0; i < punishmentList.length; i++) {
            addElemToList(ulPunishments, punishmentList, 'removePunishment', i);
        }
    }
}

function addElemToList(ulElementList, list, removeClass, index) {
    const li = document.createElement('li');
    const x = document.createElement('span');
    x.innerHTML = ' X';
    x.classList = removeClass;
    ulElementList.appendChild(li);
    li.textContent = list[index];
    li.appendChild(x);

}

const addReward = function (e) {
    e.preventDefault();
    if (input.value) {
        for (let reward of rewardList) {
            if (reward === input.value) {
                console.log('Same value');
                alert('The option has been added alredy!')
                return
            }
        }
        console.log('Reward Added');
        rewardList.push(input.value);
        input.value = '';
        showOptions();
    }
}

const addPunishment = function (e) {
    e.preventDefault();
    // if (input.value) {
    console.log('Punishment Added');
    punishmentList.push(input.value);
    input.value = '';
    showOptions();

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
    generate(rewardList, 'Reward Generated')
}

const generatePunishment = () => {
    generate(punishmentList, 'Punisment Generated')
}

function generate(list, message) {
    if (list.length > 0) {
        console.log(message)
        const index = Math.floor(Math.random() * list.length);
        h1.textContent = '';
        setTimeout(() => {
            h1.textContent = list[index];
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