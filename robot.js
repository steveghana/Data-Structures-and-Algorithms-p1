const roads = ["Alice's House-Bob's House",   "Alice's House-Cabin",
"Alice's House-Post Office",     "Bob's House-Town Hall",
"Daria's House-Ernie's House",   "Daria's House-Town Hall",
"Ernie's House-Grete's House",   "Grete's House-Farm",
"Grete's House-Shop",   "Marketplace-Farm",
"Marketplace-Post Office",  "Marketplace-Shop",
"Marketplace-Town Hall",   "Shop-Town Hall"
];

/* What we’re inter-ested in is the destinations that we can reach from a given 
place. Let’sconvert the list of roads to a data structure that, for each place, 
tells us what can be reached from there
 */
 
function buildGraph(edges) {
  let graph = Object.create(null);
function addEdge(from, to) {
 if (graph[from] == null) {
//simply means when from when defined is not available in the object, crate one            
    graph[from] = [to];
    }
 else {
//but if it is available posh [to] into the from array to create [form to]
   graph[from].push(to);
            
}
}
 for (let [from, to] of edges.map(r => r.split("-") )){

    addEdge(from, to);
    addEdge(to, from);
 }
 return graph
        
 }          // return graph
const roadGraph = buildGraph(roads)
console.log(roadGraph)

/* lets  define the village with maunmum set of values that defines it
We need the robots location and a collection of undeliverd parcels, each of whick 
has a specific location and a destination address. Thats it. Also lets make sure we
dont change the state when the robot move but rather compute a new state for the
situation after the move.
 */
class VillageState{
constructor(place, parcels){
this.place = place;
this.parcels = parcels
}

move(destination){
//if property place does not  include destingation return to original state(this)    
if(!roadGraph[this.place].includes(destination)){
return this;    
}else{
 //else map parcel address and destination   
    let parcels = this.parcels.map(p => {
        if(p.place != this.place)
        return p
        return{place : destination, address : p.address}
    }).filter(p => p.place != p.address)
return new VillageState(destination, parcels)    
}
}

}

let graph = Object.create(null);
function addEdge(from, to) {
 if ( graph[from] == null) {
console.log("hi")
//simply means when from when defined is not available in the object, crate one            
    graph[from] = [to];
    }
 else {
//but if it is available posh [to] into the from array to create [form to]
   graph[from].push(to);
            
}
}
addEdge