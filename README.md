# Fardgramming-
A custom coding language for fard i guess

When downloading, add this to your .vscode folder in your user folders, and add this entire folder in the extensions folder.

Compile using Developer commands for VS, then "cd (whatever user directory)\.vscode\extensions\fardgramming-vscode\compiler"
then just do "./fardgriddyshell.exe", and then itll work

fardgriddyshell.exe only works in the dev command prompt for vs, im working on fixing that bug.

below is the guide to learn the language, written by chatgpt because im lazyahh

# 📚 How to Learn Fardgramming-

## 1. Your First Program

Let's start with the classic:

```fard
poopoo "Hello world" lmao
```

This prints:

Hello world
What do the words mean?
poopoo = output something
"Hello world" = the text we want to output
lmao = ends the statement

So:

```fard
poopoo "Hello world" lmao
```

basically means:

Print "Hello world"
2. Variables

Variables store information.

Fardgramming- uses:

ts mf

to define a variable.

Example:

```
ts mf score be 0 rn frfr lmao
```

This creates a variable called score with a value of 0.

You can also create variables with other values:

```
ts mf John be 9 rn frfr lmao
ts mf Mike be 8 rn frfr lmao
```

Now:

John = 9
Mike = 8
3. Changing Variables

You can change the value of a variable using normal operators.

For example:

```
score + 1 lmao
```

adds 1 to score.

And:

```
score - 1 lmao
```

subtracts 1 from score.

4. Functions

Functions let you group code together so you can run it whenever you want.

A function starts with:

```
lit j*b FUNCTION_NAME iz crazyy lmao
```

and uses *griddy and griddy* for its block.

Example:

```
lit j*b hello iz crazyy lmao
*griddy
    do ts lazyahh lmao
    *griddy
        poopoo "Hello!" lmao
    griddy*
griddy*
```

Functions can then be called with:

```
do j*b hello sonion lmao
```
5. If Statements

Use gru for an if statement.

Example:

```
gru score le equal 10
*griddy
    poopoo "You got 10!" lmao
griddy*
```

This means:

```
if score == 10
    print "You got 10!"
```

Use:

no_no_square gru
for else if

Example:

```
gru score le equal 10
*griddy
    poopoo "You got 10!" lmao
griddy*
no_no_square gru score le equal 20
*griddy
    poopoo "You got 20!" lmao
griddy*
```

Use:

no_no_square
for else

Example:

```
gru score le equal 10
*griddy
    poopoo "You got 10!" lmao
griddy*
no_no_square
*griddy
    poopoo "You didn't get 10." lmao
griddy*
```
6. Comparing Things

Fardgramming- uses:

le equal

for equality.

For example:

John le equal 9

means:

John == 9

You can also use:

snot

for logical OR.

Example:

gru infard le equal "John" snot "john"

This checks whether the input is either:

John

or:

john
7. Getting User Input

Use:

infard

to get input from the user.

Example:

infard "What is your name? " lmao

The program will ask:

What is your name?

and wait for the user to type something.

8. While Loops

Use:

lore

for a while loop.

Example:

lore John = 10
*griddy
    poopoo "John is not 10 yet!" lmao
griddy*

The code inside the block runs while the condition is true.

9. For Loops

Use:

pee

for a for loop.

Example:

pee John
*griddy
    poopoo "lmao" lmao
griddy*

The exact behavior of a pee loop depends on the expression provided to it.

10. Infinite Loops

Need something to run forever?

Use:

fourevor

Example:

fourevor
*griddy
    poopoo "bet" lmao
griddy*

WARNING: This actually creates an infinite loop.

Your computer will continue running it until the program is stopped.

11. Break

Use:

im_gonna_wreck_it

to break out of a loop.

Example:

lore true
*griddy
    poopoo "This runs once." lmao
    im_gonna_wreck_it lmao
griddy*
12. Continue

Use:

fix_it_felix

to skip the rest of the current loop iteration and continue to the next one.

Example:

lore true
*griddy
    fix_it_felix lmao
griddy*
13. Sleeping

Use:

be_patient

to pause the program.

Example:

be_patient 6 lmao

This pauses the program for 6 seconds.

14. Comments

Comments start with:

/brownliquid

Anything after /brownliquid is treated as a comment.

Example:

/brownliquid this is a comment
poopoo "Hello!" lmao

Comments are ignored by the compiler.

15. The Main Program

Every Fardgramming- program needs a main entry point.

Use:

ohio3am lmao

Example:

ohio3am lmao
*griddy
    do j*b hello sonion lmao
griddy*

subway_surfers_bussin lmao

ohio3am starts the main program.

subway_surfers_bussin lmao marks the end of the Fardgramming- program.

16. Blocks

Fardgramming- uses:

*griddy

to start a block and:

griddy*

to end a block.

Example:

gru score le equal 10
*griddy
    poopoo "10!" lmao
griddy*

Think of *griddy and griddy* like { and } in C++.

17. Complete Example

Here's a full Fardgramming- example program:

```
ts mf score be 0 rn frfr lmao
ts mf John be 9 rn frfr lmao
ts mf Mike be 8 rn frfr lmao

/brownliquid an example script of fardgramming-

lit j*b scoreraise iz crazyy lmao
*griddy
    do ts lazyahh lmao
    *griddy
        score + 1 lmao
        poopoo "you did it good job dumbahh" lmao
        fix_it_felix lmao
    griddy*
griddy*

lit j*b scorelower iz crazyy lmao
*griddy
    do ts lazyahh lmao
    *griddy
        score - 1 lmao
        poopoo "wrong lolz" lmao
        im_gonna_wreck_it lmao
    griddy*
griddy*

lit j*b question iz crazyy lmao
*griddy
    do ts lazyahh lmao
    *griddy
        infard "Who won the match? " lmao

        gru infard le equal "John" snot "john"
        *griddy
            do j*b scorelower lmao
        griddy*

        no_no_square gru infard le equal "Mike" snot "mike"
        *griddy
            do j*b scoreraise lmao
        griddy*

        no_no_square
        *griddy
            poopoo "who the hell is that" lmao
            im_gonna_wreck_it lmao
        griddy*
    griddy*
griddy*

ohio3am lmao
*griddy
    do ts lazyahh lmao
    *griddy
        do j*b question sonion lmao
        be_patient 6 lmao
    griddy*
griddy*

subway_surfers_bussin lmao
```
18. Compiling Your Program

Once you have a .fard file, you can compile it using the Fardgramming- Fardpiler.

Example:

fardpile /peepee example.fard /poopoo example.exe

The Fardpiler:

Checks your Fardgramming- code for errors.
Generates C++ code.
Sends the generated C++ code to MSVC.
Produces an executable .exe.

You can then run:

example.exe
19. Running Directly

You can also use the Griddy Shell:

helloneighbor example.fard

This compiles and runs the Fardgramming- program.

🧠 Quick Keyword Reference
Fardgramming-	Meaning
ts mf	define variable
be	assign value
poopoo	output
infard	input
lit j*b	define function
do	function operation/call
gru	if
no_no_square gru	else if
no_no_square	else
lore	while
pee	for
fourevor	infinite loop
im_gonna_wreck_it	break
fix_it_felix	continue
be_patient	sleep
snot	OR
le equal	equality
*griddy	begin block
griddy*	end block
ohio3am	main
subway_surfers_bussin	program end
/brownliquid	comment
🚀 What's Next?

The goal of Fardgramming- is to make programming concepts easier to understand without requiring beginners to learn complicated syntax immediately.

You don't need to understand C++, compilers, or a bunch of libraries to start learning.

Just learn the Fard.

Then, when you're ready, you can learn what's happening underneath the Fardpiler.

Happy fardpiling.


