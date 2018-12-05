import { ACTION_TRY_BUY_GENERATOR, ACTION_TRY_SELL_GENERATOR, ACTION_GENERATE_FROM_POINTER, ACTION_GAME_TICK, ACTION_GAME_SAVE, ACTION_GAME_LOAD } from "./constants";
import { defaultState } from './defaultState'
import {BeepSound, CashSound} from './assets'
import {newGuid} from './tools';

const updateGenerator = function (targetGenerator, costScalabilityFactor) {
    targetGenerator.cost = Math.floor(targetGenerator.baseCost * Math.pow(costScalabilityFactor, targetGenerator.amount));
};

const playSound = function (soundData) {
    var snd = new Audio("data:audio/wav;base64,"+soundData);
    snd.play();
};

const possibleEmojis = ["heart","bullhorn","share-alt","smile","envelope","frown","meh","comment","hashtag","share","rss","microphone"];

const rootReducer = (state = defaultState, action) => {
    switch (action.type) {

        case ACTION_GAME_TICK: {
            let newState = Object.assign({}, state);
            for (let i = 0; i < newState.AvailableGenerators.length; i++) {
                let currentGenerator = newState.AvailableGenerators[i];
                newState.CurrentFakeNews += currentGenerator.productionPerSecond * currentGenerator.amount;
                newState.TotalFakeNews += currentGenerator.productionPerSecond * currentGenerator.amount;
                if (!currentGenerator.active && newState.CurrentMoney > (currentGenerator.baseCost / 2)) {
                    currentGenerator.active = true;
                }
            }

            let money = Math.floor(newState.CurrentFakeNews / newState.MoneyPriceFactor);
            if (money > 0) {
                newState.CurrentMoney += money;
                newState.CurrentFakeNews -= money * newState.MoneyPriceFactor;
            }

            if (newState.Emojis.length>0){
                let lastValidTime = new Date();
                lastValidTime = new Date(lastValidTime.getTime()-3000);
                newState.Emojis = newState.Emojis.filter(function(x) {return x.generationTime > lastValidTime} );
            }

            return newState;
        }

        case ACTION_TRY_BUY_GENERATOR: {
            let newState = Object.assign({}, state);
            let targetGenerator = null;
            for (let i = 0; i < newState.AvailableGenerators.length; i++) {
                if (newState.AvailableGenerators[i].id === action.payload) {
                    targetGenerator = newState.AvailableGenerators[i];
                }
            }
            if (targetGenerator.cost <= newState.CurrentMoney) {
                newState.CurrentMoney -= targetGenerator.cost;
                targetGenerator.amount += 1;
                updateGenerator(targetGenerator, newState.CostScalabilityFactor);
                playSound(CashSound);

            }
            return newState;
        }

        case ACTION_TRY_SELL_GENERATOR: {
            let newState = Object.assign({}, state);
            let targetGenerator = null;
            for (let i = 0; i < newState.AvailableGenerators.length; i++) {
                if (newState.AvailableGenerators[i].id === action.payload) {
                    targetGenerator = newState.AvailableGenerators[i];
                }
            }
            if (targetGenerator.amount > 0) {
                newState.CurrentMoney += targetGenerator.cost / 2;
                targetGenerator.amount -= 1;
                updateGenerator(targetGenerator, newState.CostScalabilityFactor);
                playSound(CashSound);
            }
            return newState;
        }

        case ACTION_GENERATE_FROM_POINTER: {
            let newState = Object.assign({}, state);
            newState.CurrentFakeNews += newState.PointerGenerator.productionPerSecond;
            newState.TotalFakeNews += newState.PointerGenerator.productionPerSecond;
            let newEmoji = {id:newGuid(),icon:possibleEmojis[Math.floor(Math.random()*possibleEmojis.length)],generationTime: new Date()};
            newState.Emojis = [...newState.Emojis,newEmoji];
            playSound(BeepSound);
            return newState;
        }

        case ACTION_GAME_LOAD: {
            let newState = Object.assign({}, state);

            let currentVal = localStorage.getItem("fn-game-data-stored-CurrentFakeNews");
            if (currentVal !== undefined && currentVal !== null && currentVal !== '') {
                newState.CurrentFakeNews = parseInt(JSON.parse(currentVal));
            }
            currentVal = localStorage.getItem("fn-game-data-stored-TotalFakeNews");
            if (currentVal !== undefined && currentVal !== null && currentVal !== '') {
                newState.TotalFakeNews = parseInt(JSON.parse(currentVal));
            }
            currentVal = localStorage.getItem("fn-game-data-stored-CurrentMoney");
            if (currentVal !== undefined && currentVal !== null && currentVal !== '') {
                newState.CurrentMoney = parseInt(JSON.parse(currentVal));
            }
            currentVal = localStorage.getItem("fn-game-data-stored-AvailableGenerators");
            if (currentVal !== undefined && currentVal !== null && currentVal !== '') {
                newState.AvailableGenerators = JSON.parse(currentVal);
            }

            return newState;
        }

        case ACTION_GAME_SAVE: {
            localStorage.setItem('fn-game-data-stored-CurrentFakeNews', JSON.stringify(state.CurrentFakeNews));
            localStorage.setItem('fn-game-data-stored-TotalFakeNews', JSON.stringify(state.TotalFakeNews));
            localStorage.setItem('fn-game-data-stored-CurrentMoney', JSON.stringify(state.CurrentMoney));
            localStorage.setItem('fn-game-data-stored-AvailableGenerators', JSON.stringify(state.AvailableGenerators));
            return state;
        }

        default: {
            return state;
        }
    }
};

export default rootReducer;