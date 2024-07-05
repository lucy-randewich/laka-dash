import { Cyclist } from '../src/cyclist';

describe('Cyclist', () => {
    let cyclist: Cyclist;

    beforeEach(() => {
        cyclist = new Cyclist(100, 100, 400);
    });

    it('should initialize with correct position', () => {
        expect(cyclist['x']).toBe(100);
        expect(cyclist['y']).toBe(100);
    });

    it('should update position correctly', () => {
        cyclist.update();
        expect(cyclist['y']).toBe(100 + cyclist['velocity']);
    });

    it('should not fall below ground', () => {
        cyclist['y'] = 320;
        cyclist.update();
        expect(cyclist['y']).toBe(320);
        expect(cyclist['velocity']).toBe(0);
    });
});
