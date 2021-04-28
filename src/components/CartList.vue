<template>
    <v-container fluid fill-height class="pa-0 d-flex align-start" style="overflow:auto;">
        <v-card width="100%" elevation="0">
            <v-container fluid fill-height class="pa-0">
                <v-list subheader two-line width="100%" class="pa-0">
                    <v-subheader>
                        <v-icon class="mr-2">
                            fab fa-opencart
                        </v-icon>
                        Carrito de compra
                    </v-subheader>
                    <v-divider></v-divider>
                    <v-card v-for="folder in folders" :key="folder.id">
                        <v-list-item>
                        <v-list-item-avatar>
                            <v-icon class="grey lighten-1" dark>
                                fas fa-spinner
                            </v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title v-text="folder.title"></v-list-item-title>
                            <v-list-item-subtitle v-text="folder.subtitle"></v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-btn icon>
                                <v-icon color="grey lighten-1">
                                    far fa-times-circle
                                </v-icon>
                            </v-btn>
                        </v-list-item-action>
                    </v-list-item>
                    </v-card>
                </v-list>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      folders: [
        {
          subtitle: '$0.02',
          title: 'Medicina',
        },
        {
          subtitle: '$0.02',
          title: 'Medicinas',
        },
        {
          subtitle: '$0.02',
          title: 'Medicina',
        },
        {
          subtitle: '$0.02',
          title: 'Medicina',
        },
        {
          subtitle: '$0.02',
          title: 'Medicina',
        },
        {
          subtitle: '$0.02',
          title: 'Medicina',
        },
        {
          subtitle: '$0.02',
          title: 'Medicina',
        },
        {
          subtitle: '$0.02',
          title: 'Medicina',
        },
        {
          subtitle: '$0.02',
          title: 'Medicina',
        },
      ],
    }),
  }
</script>