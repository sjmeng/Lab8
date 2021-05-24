/**
 * @jest-environment jsdom
 */
 import { pushToHistory } from '../scripts/router.js';

 test('checks history stack length', () => {
    pushToHistory('settings', 2);
    pushToHistory('entry',3);
    pushToHistory('entry', 4);
    expect(history.length).toBe(4);
});

describe('checks correct state object', () =>{
    test('settings', () => {
        pushToHistory('entry', 4);
        pushToHistory('settings', 0);
        expect(history.state.page).toBe('settings');
    
    });
    test('entry', () => {
        pushToHistory('settings', 0);
        pushToHistory('entry', 4);
        pushToHistory('entry', 12);
        pushToHistory('entry', 1);
        expect(history.state.page).toBe('entry1');
    });
    test('homepage', () => {
        pushToHistory("default",0);
        expect(history.state.page).toBe(undefined);
    });

});

