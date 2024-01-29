package com.reyesmicaela.programming_skills_level2

import kotlin.NumberFormatException

data class Ticket(val value: String, var available: Boolean = true)

val tickets = listOf(
    Ticket("5678B"),
    Ticket("9876C"),
    Ticket("2345D"),
    Ticket("6789E"),
    Ticket("3456F"),
    Ticket("8765G"),
    Ticket("4321H"),
    Ticket("7890J"),
    Ticket("5432K"),
    Ticket("2109L"),
    Ticket("8765M"),
    Ticket("1357N"),
    Ticket("2468P"),
    Ticket("6543Q"),
    Ticket("7891R"),
    Ticket("3579S"),
    Ticket("9821T"),
    Ticket("4682U"),
    Ticket("5763V"),
    Ticket("1234A")
)
val selectedTickets = mutableListOf<Ticket>()

fun main() {
    val menuOptions = listOf(
        "comprar 1 ticket",
        "compar 2 tickets",
        "ya tengo ticket, quiero jugar"
    )
    while (true) {
        var input = selectOption(option = menuOptions)
        if (input == 3) {
            if (selectedTickets.size == 0) {
                println("opcion no disponible: debes combrar un ticket")
                continue
            }
            play()
            if (selectedTickets.size > 0) break
        }
        if (selectedTickets.size == 0) {
            selectTicket(input)
            pay()
        } else {
            println("opcion no disponible")
        }
    }
}

fun selectTicket(howManyTickets: Int) {
    var howMany = howManyTickets
    while (howMany > 0) {
        var availableTickets = tickets.filter { it.available }
        val ticketSelectedIndex = selectOption(
            "elegir 1 - ${availableTickets.size}: ",
            tickets.filter { it.available }.map { it.value })

        val ticketSelected = availableTickets[ticketSelectedIndex - 1]
        ticketSelected.available = false
        selectedTickets.add(ticketSelected)
        howMany--
    }
}

fun pay() {
    val paymentOptions = listOf(
        "pago en efectivo",
        "pago con tarjeta"
    )
    val paymentSelected = selectOption(option = paymentOptions)
    if (paymentSelected == 1) {
        val cashOptions = listOf(
            if (selectedTickets.size == 2) "2 billetes de 1USD" else "1USD",
            "5USD"
        )
        val cashSelected = selectOption(option = cashOptions)
        if (cashSelected == 2) {
            println("retire su vuelto")
            repeat(if (selectedTickets.size == 2) 3 else 4) {
                println("|........   $1   ........|".yellow())
            }
        }
    }
    println("usted ha comprado el ticket:")
    selectedTickets.forEach { println(" _ _ _ _ _ _ _ _ _\n|                 |\n|  ticket: ${it.value}  |\n|                 |\n|_ _ _ _ _ _ _ _ _|") }
}

fun play() {
    val winningTicket = tickets[(0..19).random()]
    println("Ticket ganador:")
    println(" _ _ _ _ _ _ _ _ _\n|                 |\n|  ticket: ${winningTicket.value}  |\n|                 |\n|_ _ _ _ _ _ _ _ _|")
    println("tus tickets:")
    selectedTickets.forEach { println(" _ _ _ _ _ _ _ _ _\n|                 |\n|  ticket: ${it.value}  |\n|                 |\n|_ _ _ _ _ _ _ _ _|") }
    if (selectedTickets.contains(winningTicket)) println("felicitaciones, tu billete ${winningTicket.value} es el ganador")
    else (println("no has tenido suerte :-("))
}

fun selectOption(message: String? = null, option: List<*>): Int {
    while (true) {
        if (!message.isNullOrEmpty()) println(message)
        option.forEachIndexed { index, it -> println("${index + 1} $it") }
        try {
            val input = readln().toInt()
            if (input <= option.size) {
                return input
            } else {
                println("opcion incorrecta")
                continue
            }
        } catch (e: NumberFormatException) {
            println("opcion incorrecta")
            continue
        }
    }
}

fun String.yellow() = "\u001B[33m$this\u001B[0m"



