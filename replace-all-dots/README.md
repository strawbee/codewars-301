# Replace All Dots
https://www.codewars.com/kata/fixme-replace-all-dots/javascript

The problem today was to replace all dots in a string to dashes. The code originally provided was not working because a period is a special character in regular expressions that needs to be escaped. We also needed to add the global metacharacter in order to replace all dots instead of just the first dot.
