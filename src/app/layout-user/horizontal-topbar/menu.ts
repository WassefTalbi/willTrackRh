import { MenuItem } from "./menu.model";

export const MENU1 = {
  clientMenu: [
    {
      id: 1,
      label: 'Accuiel',
      icon: 'ph-folder-open',
      link: 'tickets/home',
      
    },
    {
      id: 2,
      label: 'Offre d\'emploi',
      icon: 'ph-calendar',
      link: '/Condidat/pages/offerUserJOB',
 
    },
    {
      id: 3,
      label: 'Offre de stage Pfe',
      icon: 'ph-calendar',
      link: '/Condidat/pages/offerUserPFE',
     
    },
    {
      id: 4,
      label: 'Offre de stage',
      icon: 'ph-calendar',
      link: '/Condidat/pages/offerUser',
     
    },
    {
      id: 5,
      label: 'Applications',
      icon: 'ph-calendar',
      link: '/Condidat/pages/applications',
     
    },
    
  ],
  recruteurMenu: [

   
    {
      id: 1,
      label: 'Entretien',
      icon: 'ph-calendar',
      link: '/Recruteur/apps/calendar-technical',
      
    },

  ],
  managerMenu: [

   
    {
      id: 1,
      label: 'Entretien',
      icon: 'ph-calendar',
      link: '/Manager/apps/calendar-manager',
     
    },

  ],

  rhMenu: [
   
  
    {
      id: 1,
      label: 'Liste des offres',
      icon: 'ph-calendar',
      link:'/Rh/pages/mesofferStaff',
  
    },
    {
        id: 2,
        label: 'Entretien',
        icon: 'ph-calendar',
        link: '/Rh/apps/calendar-rh',
      
      },

  ],


};

export const MENU: MenuItem[] = [

 
  {
    id: 23,
    label: 'MENUITEMS.APPS.LIST.FILEMANAGER',
    icon: 'ph-folder-open',
    link: '/apps/file-manager',
    parentId: 8,
  },
  {
    id: 4, 
    label: 'Offre d\'emploi',
    icon: 'ph-calendar',
    link: '/Recruteur/pages/offer',
    parentId: 3
  },
  {
    id: 5,
    label: 'Offre de stage',
    icon: 'ph-calendar',
    link: '/apps/calendar',
    parentId: 3
  },


  ]
