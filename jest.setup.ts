// Mock the Image constructor (jsdom already provides window and document)
(global as any).Image = class {
    src: string = '';
    onload: () => void = () => {};
    onerror: () => void = () => {};
};

// Mock addEventListener for 'keydown'
document.addEventListener = (event: string, callback: EventListenerOrEventListenerObject) => {
    if (event === 'keydown') {
        // Optionally, store the callback for manual triggering in tests
        (global as any).keydownCallback = callback;
    }
};

// Mock requestAnimationFrame
global.requestAnimationFrame = (callback: FrameRequestCallback): number => {
    return setTimeout(callback, 16); // Simulate ~60fps
};

// Mock cancelAnimationFrame
global.cancelAnimationFrame = (id: number) => {
    clearTimeout(id);
};
