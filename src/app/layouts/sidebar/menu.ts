import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [

  {
    id: 1,
    label: 'MENUITEMS.MENU.TEXT',
    isTitle: true
  },


    /*dashboard Bi*/
  {
    id: 3,
    label: 'Dashboard BI',
    icon: 'ph-gauge',
    subItems: [
      {
        id: 2,
        label: 'Recrutement ',
        icon: 'ph-storefront',
        link: '/pages/recrutementbi',
        parentId: 3
      },
      {
        id: 4,
        label: 'Integration',
        link: '/pages/integrationbi',
        parentId: 3
      },
      {
        id: 4,
        label: 'Post-Integration',
        link: '/pages/postintegrationbi',
        parentId: 3
      }
      
    ]
  },
/*utilisateur*/
 
  {
    id: 2,
    label: 'Utilisateur',
    icon: 'ph-gauge',
    subItems: [
      {
        id: 2, 
        label: 'Recruteur',
        icon: 'ph-storefront',
        link: '/pages/recruteur',
        parentId: 2
      },
      {
        id: 4,
        label: 'ressources humaines',
        link: '/pages/rh',
        parentId: 2
      },
      {
        id: 4,
        label: 'Condidat',
        link: '/pages/condidat',
        parentId: 2
      }
    ]
  },


 /*recrutement*/
  {
    id: 4,
    label: 'Postulation',
    icon: 'ph-gauge',
    subItems: [
      {
        id: 2,
        label: 'Entretiens',
        icon: 'ph-storefront',
        link: '/apps/calendar',
        parentId: 8
      },
      
    ]
  },
  /*offre*/
  {
    id: 2,
    label: 'Offres',
    icon: 'ph-gauge',
    subItems: [
      {
        id: 2,
        label: 'Liste des offres',
        icon: 'ri-apps-line',
        link: '/pages/mesofferAdmin',
        parentId: 8
      },
      
    ]
  },
  /*modeling*/
  {
    id: 5,
    label: 'Filter CV',
    icon: 'ph-storefront',
    link: '/pages/filtercv',
    
  },
  {
    id: 6,
    label: 'Prédiction de salaire',
    icon: 'ph-storefront',
    link: '/pages/prediction',
    
  },
  {
    id: 7,
    label: 'Regroupement',
    icon: 'ph-storefront',
    link: '/pages/regroupement',
   
  },
  {
    id: 4,
    label: 'Retention',
    icon: 'ph-gauge',
    subItems: [
   {
    id: 7,
    label: 'Retention Recrutement',
    icon: 'ph-storefront',
    link: '/pages/retention-recrutement',
   
  },
  {
    id: 7,
    label: 'Retention Integration',
    icon: 'ph-storefront',
    link: '/pages/retention-integration',
   
  },

]
}


]

export const MENU_RH: MenuItem[] = [
    {
      id: 1,
      label: 'MENUITEMS.MENU.TEXT',
      isTitle: true
    },
    {
      id: 3,
      label: 'Dashboard BI',
      icon: 'ph-gauge',
      subItems: [
        {
          id: 2,
          label: 'Recrutement',
          link: '/Rh/pages/recrutementbi',
          parentId: 3
        },
        {
          id: 4,
          label: 'Integration',
          link: '/Rh/pages/integrationbi',
          parentId: 3
        },
        {
          id: 5,
          label: 'Post-Integration',
          link: '/Rh/pages/postintegrationbi',
          parentId: 3
        }
      ]
    },
    /*utilisateur*/
 
  {
    id: 2,
    label: 'Utilisateur',
    icon: 'ph-gauge',
    subItems: [
      {
        id: 2, 
        label: 'Recruteur',
        icon: 'ph-storefront',
        link: '/Rh/pages/recruteur',
        parentId: 2
      },
      {
        id: 4,
        label: 'ressources humaines',
        link: '/Rh/pages/rh',
        parentId: 2
      },
      {
        id: 4,
        label: 'Condidat',
        link: '/Rh/pages/condidat',
        parentId: 2
      }
    ]
  },


 /*recrutement*/
  {
    id: 4,
    label: 'Postulation',
    icon: 'ph-gauge',
    subItems: [
      {
        id: 2,
        label: 'Entretiens',
        icon: 'ph-storefront',
        link: '/Rh/apps/calendar-rh',
        parentId: 8
      },
      
    ]
  },
  /*offre*/
  {
    id: 2,
    label: 'Offres',
    icon: 'ph-gauge',
    subItems: [
      {
        id: 2,
        label: 'Liste des offres',
        icon: 'ri-apps-line',
        link: '/Rh/pages/mesofferStaff',
        parentId: 8
      },
      
    ]
  },
  /*modeling*/
  {
    id: 5,
    label: 'Filter CV',
    icon: 'ph-storefront',
    link: '/Rh/pages/filtercv',
    
  },
  {
    id: 6,
    label: 'Prédiction de salaire',
    icon: 'ph-storefront',
    link: '/Rh/pages/prediction',
    
  },
  {
    id: 7,
    label: 'Regroupement',
    icon: 'ph-storefront',
    link: '/Rh/pages/regroupement',
   
  },
  {
    id: 4,
    label: 'Retention',
    icon: 'ph-gauge',
    subItems: [
   {
    id: 7,
    label: 'Retention Recrutement',
    icon: 'ph-storefront',
    link: '/Rh/pages/retention-recrutement',
   
  },
  {
    id: 7,
    label: 'Retention Integration',
    icon: 'ph-storefront',
    link: '/Rh/pages/retention-integration',
   
  },

]
}
    
  ];
