import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lifePoints: 50,
    remainingPoints: 50
  },
  mutations: {
    hitMark: function() {
        this.state.remainingPoints--;
    },
    useless: function(){
        this.state.remainingPoints++;
    },
  },
  actions: {
    untilDead: function(){
        if(this.state.remainingPoints > 0)
        {
        this.commit("hitMark");
        } 
        else if(this.state.remainingPoints == 0)
        {
            alert("Il est mort");
        }
      },
    itsUseless: function(){
        if(this.state.remainingPoints > 0){
            this.commit("useless");
            alert("Mudada!");
        }
    }
  }
})