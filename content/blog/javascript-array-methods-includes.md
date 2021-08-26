---
draft: true
previewImage: "/img/default-card-image.png"
title: JavaScript Array includes() Method
summary: ''
createdAt: 2021-08-25T23:00:00.000-06:00

---
## Description

The `includes()` method checks if an element exists in an array and will return a `boolean`. As you may have guessed, it returns `true` if the array has the value and it returns `false` if the array does not contain the value.

    const insects = ['grasshopper', 'ant', 'hornet', 'fly', 'praying-mantis'];
    
    insects.includes('ant'); 		// true
    insects.includes('hornet'); 	// true
    insects.includes('beetle'); 	// false

## Syntax

    array.includes(searchElement)
    array.includes(searchElement, fromIndex)

### Parameters

`searchElement`

The value that you're checking for in the array.

`fromIndex` _(optional)_

The index in which to start searching for `searchElement`. If no value is provided, this method will search from the beginning of the array. 

### Return Value

This method will return `true` if the tested array includes the given value, otherwise it will return `false`.

## Use Cases

### Check if an array contains a specific value