// Soldier
class Soldier {
  constructor (health, strength){
    this.health=health
    this.strength=strength
  }

  attack(){
    return this.strength
  }

  receiveDamage(damage){
    this.health = this.health-damage
    console.log(this.health);
  }

}

let soldier = new Soldier(100,100);
soldier.receiveDamage(50)


  // Viking
class Viking extends Soldier{

  constructor (name, health, strength){
    super (health,strength)
    this.name = name
  }

   receiveDamage(damage){
    this.health = this.health-damage;
    if(this.health>0){
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }

   battleCry(){
    return "Odin Owns You All!"
  }

}
let viking = new Viking('Frode',100,100);
console.log(viking);
viking.receiveDamage(100);
console.log(viking.receiveDamage(101))



// Saxon
class Saxon extends Soldier {
   receiveDamage(damage) {
    this.health =this.health-damage;
    if (this.health>0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }

}
let saxon = new Saxon(100,100);
console.log(saxon);
console.log(saxon.receiveDamage(100))


// War
class War {

  constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
  }
  

  addViking(Viking){
    this.vikingArmy.push(Viking)
  }
  addSaxon(Saxon){
    this.saxonArmy.push(Saxon)
  }
  
    vikingAttack() {
      var randomViking = Math.floor(Math.random() * this.vikingArmy.length);
      var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
      var attackResult = this.saxonArmy[randomSaxon].receiveDamage(
        this.vikingArmy[randomViking].strength);
  
      if (this.saxonArmy[randomSaxon].health <= 0) {
        this.saxonArmy.splice(randomSaxon, 1);
      }
  
      return attackResult;
    }
  
    
  saxonAttack() {
    var randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    var randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var attackResult = this.vikingArmy[randomViking].receiveDamage(
      this.saxonArmy[randomSaxon].strength
    );
    if (this.vikingArmy[randomViking].health <= 0) {
      this.vikingArmy.splice(randomViking, 1);
    }
    return attackResult;
  }
  
  showStatus() {
    if (this.saxonArmy.length === 0 && this.vikingArmy.length > 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.saxonArmy.length > 0 && this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
  
  
}

 
  if (typeof module !== 'undefined') {
    module.exports = { Soldier, Viking, Saxon, War };
  }
