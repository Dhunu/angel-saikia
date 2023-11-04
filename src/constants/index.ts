export enum projectType {
    'Individual',
    'Group'
}

export const projectsFullStack = []

export const projectsFrontEnd = [
    {
        id: 1,
        title: 'BrightLine Clone',
        description: 'A clone of BrightLine website',
        type: projectType.Group,
        techStack: ['HTML', 'CSS', 'Javascript'] ,
        image: 'https://dhunu.github.io/resources/brightline.png',
        url: 'https://peppy-valkyrie-ddd5ab.netlify.app',
        github: 'https://github.com/Roshan-Patro/fallacious-company-8720'
    },
    {
        id: 2,
        title: 'Headphone Zone Clone',
        description: 'A clone of Headphone Zone website',
        type: projectType.Individual,
        techStack: ['HTML', 'CSS', 'Javascript'] ,
        image: 'https://dhunu.github.io/resources/headphoneZone.png',
        url: 'https://headphone-zone.netlify.app/',
        github: 'https://github.com/Dhunu/third-ice-7307'
    },
    
]

export const projectsBackEnd = [
    {
        id: 3,
        title: 'Vegetable Store REST API',
        description: 'A SpringBoot REST API for a vegetable store',
        type: projectType.Group,
        techStack: ['Java', 'SpringBoot', 'MySQL'] ,
        image: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaDaZT3-0qSnu5_xNENyORagGyWQj-1NuN3DQf6Nc4pixtVJ_TKdlAPcFsAIEJuS9IP-limDKK6X5LVDv2PZGpVE_XTEog=w1920-h1080-k-pd',
        url: 'https://drive.google.com/file/d/1Jt00mxg6g2iQqEZlUbBLE38YRGqga-FH/view',
        github: 'https://github.com/Dhunu/Sabzi-Bazar'
    },
    {
        id: 4,
        title: 'Covid Vaccination REST API',
        description: 'A SpringBoot REST API for a Covid Vaccination Slot Booking System',
        type: projectType.Group,
        techStack: ['Java', 'SpringBoot', 'MySQL'] ,
        image: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaANhw8-azVY4D-AMmwyEuHvPuYDajEE8k049jvXKmezd1hSxe_RpnQUp9SJSEcDV2yxph_hEWmrTSQx_B1H_ytXt57k=w1920-h1080-k-pd',
        url: 'https://drive.google.com/file/d/1tAzNjvCl-ANz16uYO9CKjvDYcpJeFzgf/view?usp=sharing',
        github: 'https://github.com/Dhunu/Covid_Vacination'
    },
]

