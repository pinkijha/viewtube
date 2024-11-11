# ViewTube
- Header
- Body
    - Sidebar
    - MainContainer
        - ButtonList
        - VideoContainer
    - WatchList

    
# Concepts
- Debouncing:
    - typing Slow = 200ms
    - typing fast = 30ms
- Performance
    - iphone pro max = 14 letters * 1000 = 14000
    - with debouncing = 3 API calls * 1000 = 3000

- Debouncing with 200ms
    - if difference between 2 key strokes is < 200ms - Decline API Calls
    - > 200ms make APi Calls   