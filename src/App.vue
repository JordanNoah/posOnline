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
                      <v-btn depressed rounded text>
                        Edit Account
                      </v-btn>
                      <v-divider class="my-3"></v-divider>
                      <v-btn depressed rounded text>
                        Disconnect
                      </v-btn>
                    </div>
                  </v-list-item-content>
                </v-card>
              </v-menu>
              <v-toolbar-title class="mx-2">Pos Online</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card :height="this.windowSizeHeight - 72" style="overflow:auto">
              <v-container>
                <v-row>
                  <v-col v-for="a in 13" cols="3" :key="a">
                    <v-card>
                      <v-img src="https://picsum.photos/500/300?image=15"
                        lazy-src="https://picsum.photos/500/300?image=15" height="200"
                        class="white--text grey darken-4">
                        <template v-slot:placeholder>
                          <v-row class="fill-height ma-0" align="center" justify="center">
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                          </v-row>
                        </template>
                        <v-container fluid fill-height class="ma-0 pa-0 d-flex align-end flex-column">
                          <v-card class="mb-auto pa-2 text-lg-right font-weight-medium" tile elevation="0"
                            color="rgba(255, 255, 255, 0.50)">
                            $ 13.50
                          </v-card>
                        </v-container>
                      </v-img>
                      <v-card-title class="body-1 pa-3 font-weight-medium">
                        Flex item 2
                      </v-card-title>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
            <v-system-bar>
              <span>12:30</span>
              <v-spacer></v-spacer>
              <v-icon>fas fa-exclamation-triangle</v-icon>
              <v-icon>fas fa-battery-full</v-icon>
              <v-icon>fas fa-wifi</v-icon>
              <v-icon>fas fa-sync-alt</v-icon>
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
              <v-btn height="100%" width="100%" elevation="0">
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
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import keyboard from '../src/components/Keyboard'
import cartList from '../src/components/CartList'
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
    }),
    created() {},
    components: {
      keyboard,
      cartList
    },
    methods: {
      onResize() {
        this.windowSizeHeight = window.innerHeight
      },
    }
  };
</script>
