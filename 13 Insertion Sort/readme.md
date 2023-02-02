
# Insertion Sort Pseudocode


    Start by picking the second element in the array
    Now compare the second element with the one before it and swap if necessary.
    Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
    Repeat until the array is sorted.




# This algorithm sorts an array of items by repeatedly taking an element from the unsorted portion of the array and inserting it into its correct position in the sorted portion of the array.

    1. The procedure takes a single argument, ‘A’, which is a list of sortable items.
    2. The variable ‘n’ is assigned the length of the array A.
    3. The outer for loop starts at index ‘1’ and runs for ‘n-1’ iterations, where ‘n’ is the length of the array.
    4. The inner while loop starts at the current index i of the outer for loop and compares each element to its left neighbor. If an element is smaller than its left neighbor, the elements are swapped.
    5. The inner while loop continues to move an element to the left as long as it is smaller than the element to its left.
    6. Once the inner while loop is finished, the element at the current index is in its correct position in the sorted portion of the array.
    7. The outer for loop continues iterating through the array until all elements are in their correct positions and the array is fully sorted.


# links
https://cs.slides.com/colt_steele/elementary-sorting-algorithms#/2/0/0
