#include <iostream>
#include <string>
#include <thread>
#include <chrono>

int score = 0;
int John = 9;
int Mike = 8;
void scoreraise()
{
    score += 1;
    std::cout << "you did it good job dumbahh" << std::endl;
    return;
}
void scorelower()
{
    score -= 1;
    std::cout << "wrong lolz" << std::endl;
    return;
}
void list_teams()
{
    std::cout << "Player 1: John, " << John << " years old" << std::endl;
    std::cout << "Player 2: Mike, " << Mike << " years old" << std::endl;
}
void question()
{
    std::cout << "Who won the match? " << std::flush;
    std::string __fard_input;
    std::getline(std::cin, __fard_input);
    if (__fard_input == "John" || __fard_input == "john")
    {
        scorelower();
    }
    else if (__fard_input == "Mike" || __fard_input == "mike")
    {
        scoreraise();
    }
    else
    {
        std::cout << "who the hell is that" << std::endl;
        return;
    }
}
void loop()
{
    while (John < 10)
    {
        std::cout << "sonion grew up" << std::endl;
    }
    while (true)
    {
        std::cout << "bet" << std::endl;
    }
    for (int i = 0; i < John; i++)
    {
        std::cout << "lmao" << std::endl;
    }
}
int main()
{
    list_teams();
    question();
    std::this_thread::sleep_for(std::chrono::seconds(6));
    loop();
}
