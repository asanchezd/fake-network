import { ACTION_TRY_BUY_GENERATOR , ACTION_TRY_SELL_GENERATOR , ACTION_GENERATE_FROM_POINTER , ACTION_GAME_TICK , ACTION_GAME_SAVE , ACTION_GAME_LOAD} from './constants';

export const tryBuyGenerator = generatorID => ({type:ACTION_TRY_BUY_GENERATOR, payload:generatorID});
export const trySellGenerator = generatorID => ({type:ACTION_TRY_SELL_GENERATOR, payload:generatorID});
export const generateFromPointer = () => ({type:ACTION_GENERATE_FROM_POINTER, payload:{}});
export const gameTick = () => ({type:ACTION_GAME_TICK, payload:{}});
export const gameSave = () => ({type:ACTION_GAME_SAVE, payload:{}});
export const gameLoad = () => ({type:ACTION_GAME_LOAD, payload:{}});