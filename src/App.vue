<template>
  <v-app dark>
    <v-main>
      <v-container fill-height fluid class="pa-0 d-flex align-start" v-resize="onResize">
        <v-row no-gutters class="fill-height">
          <v-col class="" cols="8">
            <v-toolbar dense flat>
              <v-menu bottom min-width="200px" rounded offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on">
                    <v-avatar color="green" size="38">
                      <img src="https://cdn.vuetifyjs.com/images/john.jpg" :alt="user.initials">
                    </v-avatar>
                  </v-btn>
                </template>
                <v-card>
                  <v-list-item-content class="justify-center">
                    <div class="mx-auto text-center">
                      <v-avatar color="brown">
                        <span class="white--text headline">{{ user.initials }}</span>
                      </v-avatar>
                      <h3>{{ user.fullName }}</h3>
                      <p class="caption mt-1">
                        {{ user.email }}
                      </p>
                      <v-divider class="my-3"></v-divider>
                        <v-btn depressed text @click="syncStateDialog()">
                          Sync Database
                        </v-btn>
                      <v-divider class="my-3"></v-divider>
                      <v-btn depressed rounded text>
                        Edit Account
                      </v-btn>
                      <v-divider class="my-3"></v-divider>
                      <v-btn depressed rounded text>
                        Disconnect
                      </v-btn>
                    </div>
                  </v-list-item-content>
                    <v-card elevation="0" class="d-flex justify-end mx-1 px-1 text-overline">
                      <span>
                        v:
                      </span> 
                      <span> 
                        0.01
                      </span>
                    </v-card>
                </v-card>
              </v-menu>
              <v-toolbar-title class="mx-2">Pos Online</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card :height="this.windowSizeHeight - 74.4" style="overflow:auto" elevation="0" outlined tile>
              <products />
            </v-card>
            <v-system-bar>
              <v-card elevation="0" style="background-color:#e0e0e0" class="mx-1 px-1">
                <clock />
              </v-card>
              <v-card elevation="0" style="background-color:#e0e0e0" class="mx-1 px-1">
                <span>
                  {{this.$store.state.dialogSync}}
                </span>
              </v-card>
              <v-spacer></v-spacer>
              <v-icon>fas fa-exclamation-triangle</v-icon>
              <battery />
              <internet></internet>
              <syncStatus />
            </v-system-bar>
          </v-col>
          <v-col cols="4">
            <v-card :height="this.windowSizeHeight * 0.50" elevation="0" outlined tile>
              <cartList />
            </v-card>
            <v-card :height="this.windowSizeHeight * 0.10" elevation="0" outlined tile>
              <v-list two-line class="text-center pa-0">
                <v-list-item>
                  <v-list-item-content class="pa-0">
                    <v-list-item-subtitle>Subtotal: $1.50</v-list-item-subtitle>
                    <v-list-item-subtitle>Iva 12%: $0.15</v-list-item-subtitle>
                    <v-list-item-title>Total: $1.65</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
            <v-card :height="this.windowSizeHeight * 0.05" elevation="0" outlined tile>
              <v-btn height="100%" width="100%" elevation="0" tile>
                <v-icon dense class="mx-2">
                  fas fa-user
                </v-icon>
                <span>User</span>
              </v-btn>
            </v-card>
            <v-card :height="this.windowSizeHeight * 0.35" elevation="0">
              <v-container fluid fill-height class="pa-0">
                <keyboard></keyboard>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
        <v-dialog v-model="dialogState" width="500" persistent>
          <syncDialog />
        </v-dialog>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import keyboard from '../src/components/Keyboard'
import products from '../src/components/Products'
import cartList from '../src/components/CartList'
import clock from '../src/components/Clock'
import battery from '../src/components/Battery'
import internet from '../src/components/Internet'
import syncStatus from '../src/components/SyncStatus'
import syncDialog from '../src/components/SyncDialog'
export default {
  name: 'App',

  data: () => ({
    windowSizeHeight: 0,
    user: {
      initials: 'JD',
      fullName: 'John Doe',
      email: 'john.doe@doe.com',
    },
    loading: false,
    selection: 1,
    dialog: false
  }),
  mounted() {
    this.$store.state.db.config.debug = false
  },
  components: {
    keyboard,
    cartList,
    clock,
    internet,
    products,
    syncStatus,
    battery,
    syncDialog
  },
  computed:{
    dialogState() {
      return this.$store.state.dialogSync
    }
  },
  methods: {
    onResize() {
      this.windowSizeHeight = window.innerHeight
    },
    syncStateDialog(){
      this.$store.state.dialogSync = !this.$store.state.dialogSync
    }
  }
};
</script>