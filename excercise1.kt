package com.reyesmicaela.programming_skills_level2

class Team(val name: String, var points: Int = 0)

val teams = listOf(
    Team("Manchester United"),
    Team("Liverpool"),
    Team("Arsenal"),
    Team("Chelsea"),
    Team("Manchester City"),
    Team("Tottenham Hotspur")
)

fun main() {
    for (i in teams.indices) {
        for (j in i + 1 until teams.size) {
            repeat(3) {
                val score = (0..2).random()
                teams[j].points += if (score == 2) 3 else score
                if (score == 0) teams[i].points += 3
                if (score == 1) teams[i].points += 1
            }
        }
    }
    println("Premier League table: ${teams.sortedBy { (it.points) }.reversed().map { "\n${it.name} ${it.points}" }}")
}