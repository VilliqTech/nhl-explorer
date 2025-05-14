import { createTheme } from '@mantine/core';

export const theme = createTheme({
    colors: {
        primary: [
            '#cdb0e8',
            '#c09ce2',
            '#b488dd',
            '#a774d7',
            '#7f38c2',
            '#7533b2',
            '#682e9e',
            '#5b288b',
            '#4e2277',
            '#34174f',
        ],
        gradientFrom: [
            '#cdb0e8',
            '#c09ce2',
            '#b488dd',
            '#a774d7',
            '#7f38c2',
            '#7533b2',
            '#682e9e',
            '#5b288b',
            '#4e2277',
            '#34174f',
        ],
        gradientTo: [
            '#fb9ded',
            '#fa84e8',
            '#f96ce3',
            '#f853df',
            '#f50ad1',
            '#e609c4',
            '#c408a7',
            '#ac0792',
            '#93067d',
            '#620454',
        ],
    },
    primaryShade: 4,
    primaryColor: 'primary',
    headings: {
        fontFamily: 'Roboto, sans-serif',
        sizes: {
            h1: { fontSize: 36 },
        },
    },
    defaultRadius: 'md',
    shadows: {
        md: '1px 1px 3px rgba(0, 0, 0, .25)',
        xl: '5px 5px 3px rgba(0, 0, 0, .25)',
    },
    respectReducedMotion: true,
    components: {
        Button: {
            styles: {
                root: {
                    borderWidth: 2,
                },
            },
        },
        Chip: {
            styles: {
                label: {
                    borderWidth: 2,
                },
            },
        },
        Input: {
            styles: {
                input: {
                    borderWidth: 2,
                },
            },
        },
        Pagination: {
            styles: {
                item: {
                    borderWidth: 2,
                },
            },
        },
        Switch: {
            styles: {
                track: {
                    borderWidth: 2,
                },
            },
        },
    },
    other: {
        defaultBorderWidth: 2,
        buttonActiveStyle: 'zoom',
    },
    defaultGradient: {
        deg: 45,
        to: 'gradientTo',
        from: 'gradientFrom',
    },
});
