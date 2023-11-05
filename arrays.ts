const supperHero: string[] = []
const power: number[] = []
const power2: Array<number> = [] // orther way to define

type User = {
  name: string,
  isActive: boolean
}

const allUser: User[] = []

supperHero.push("captain")
power.push(2)
allUser.push({ name: "Anh", isActive: true })

console.log(supperHero)