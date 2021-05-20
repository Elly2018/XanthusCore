/**
 * Simple calendar display data format\
 * Use in client side calendar component
 */
export interface CalendarData{
    /**
     * Title label
     */
    name: string,
    /**
     * Message
     */
    content: string,
    /**
     * Start time
     */
    start: number,
    /**
     * End time
     */
    end: number,
    /**
     * Display color
     */
    color: string,
    /**
     * Day event or time event\
     * Will affect the display position\
     * @true Display on top in day mode
     * @false Display range by time
     */
    timed: boolean,
}