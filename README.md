To Check the frontEnd Code


https://infinitescrollproject111.netlify.app/



Explanation 
index.js

Index.js is the entry file
App.js goes to    <InfiniteScrolling/>


from useInfiniteScroll function the fetchData is an argument and we  initialised state
state 1 is an empty array.
state-2, the array index starts from 1.
state-3 is declared as is boolean.


useEffect

using the useEffect in infinitescroll
if the length (means no data) 
then set the page loading to false


useEffect
in useEffect, use usEffect here and if the dependencies changes ,[page and fetchData] then it reloads the DOM
if the page loads loat the data +1 add more+1

page-2
InfiniteScrollList.js
const observer = useRef(); useREf directly updates the DOM
in this logic 
 const lastElementRef = useCallback(
 usecallback is used here because whenever hasMore and loadMore loads and only if the dependencies are changed it updates the DOM
  if no change then there is no update
  //observer.disconnect.current feature is used when the clean up happens before the next func loads
  //IntersectionObserver new is a browser feature
  //if (entries[0].isIntersecting && hasMore) if the data is loaded and something pops up then go next and the page loading of the current is true.

//he if (node) condition checks whether the node exists ( it's not null or undefined)
// ref={index === data.length - 1 ? lastElementRef : null}
It checks if the current element's index is equal to data.length - 1 (i.e., the last item in the data array).


