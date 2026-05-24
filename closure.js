function createBankAccount(owner, initialBalance) {
  let balance = initialBalance

  return {
    deposit(amount) {
      balance += amount

      console.log(
        `${owner} deposited ${amount}`
      )

      console.log(
        `Current Balance: ${balance}`
      )
    },

    withdraw(amount) {
      if (amount > balance) {
        console.log('Insufficient Balance')
        return
      }

      balance -= amount

      console.log(
        `${owner} withdrew ${amount}`
      )

      console.log(
        `Current Balance: ${balance}`
      )
    },

    checkBalance() {
      console.log(
        `${owner}'s Balance: ${balance}`
      )
    }
  }
}

const account = createBankAccount('yash' , 5000)
account.checkBalance()
account.deposit(1000)
account.withdraw(200)

