export const ButtonSettings = {
    componentVariants: {
        color: {
            prop: 'colorVariant',
            variants: {
                'solid-primary': {
                    backgroundColor: 'primary.main',
                    // backgroundColor: 'orangered',

                    boxShadow: 'none',
                    '&:hover': {
                        // backgroundColor: 'primary.dark',
                        backgroundColor: '#FF0000',
                    }
                },
                'solid-secondary': {
                    backgroundColor: 'transparent',
                    boxShadow: 'none'
                },
                'outline-primary': {
                    boxShadow: 'none'
                },
                'outline-secondary': {
                    boxShadow: 'none'
                }
            },
        },
    },
}