<template>
    <v-row no-gutters>
        <v-col v-for="(bar, i) in bars" :key="i" cols="12" sm="12" md="12">
            <v-card color="grey lighten-4" flat height="100%">
                <v-toolbar :color="bar.class">
                    <v-btn icon @click="closeDialog()">
                        <v-icon>
                            fas fa-times
                        </v-icon>
                    </v-btn>
                    <v-toolbar-title>Configuration app</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="darkMode()">
                        <v-icon v-if="isDark">fas fa-moon</v-icon>
                        <v-icon v-else>mdi-white-balance-sunny</v-icon>
                    </v-btn>
                </v-toolbar>

                <v-card-text>
            <v-btn
              color="primary"
              dark
              class="ma-2"
              @click="dialog2 = !dialog2"
            >
              Open Dialog 2
            </v-btn>
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="ma-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  Tool Tip Activator
                </v-btn>
              </template>
              Tool Tip
            </v-tooltip>
            <v-list
              three-line
              subheader
            >
              <v-subheader>User Controls</v-subheader>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Content filtering</v-list-item-title>
                  <v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Password</v-list-item-title>
                  <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list
              three-line
              subheader
            >
              <v-subheader>General</v-subheader>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox v-model="notifications"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Notifications</v-list-item-title>
                  <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox v-model="sound"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Sound</v-list-item-title>
                  <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox v-model="widgets"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Auto-add widgets</v-list-item-title>
                  <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>

            </v-card>
        </v-col>
    </v-row>
</template>
<script>
  export default {
    data: () => ({
      bars: [
        { class: 'elevation-0',dark: true },
      ],
      checkbox: true,
    }),
    computed:{
        isDark:function() {
            return this.$vuetify.theme.dark;
        }
    },
    methods:{
        darkMode:function(){
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark
        },
        closeDialog(){
            this.$store.commit('ConfigAppDialog')
        }
    }
  }
</script>