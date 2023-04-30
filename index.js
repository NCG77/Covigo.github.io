const chartOptions = {
    chart: {
        type: 'area',
        height: 180,
        toolbar: { show: false }, // Hide chart toolbar
        zoom: { enabled: false } // Disable chart zooming
    },
    colors: ['#A084DC'], // Set chart color
    series: [{ name: 'Cases', data: [3,4,4.1,4.2,4.2,4.3,4.3,4.4,4.4,4.4,4.5,4.5] }], // Set chart data
    dataLabels: { enabled: false }, // Hide chart data labels
    stroke: { width: 3, curve: 'smooth' }, // Set chart stroke properties
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 0.5,
            opacityFrom: 0.7,
            opacityTo: 0,
            stops: [0, 70, 100] // Set chart fill gradient stops
        }
    },
    xaxis: {
        categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], // Set x-axis categories
        axisBorder: { show: false }, // Hide x-axis border
        labels: { style: { colors: '#a7a7a7', fontFamily: 'Poppins' } } // Set x-axis label properties
    }, 
    yaxis: { show: false }, // Hide y-axis
    grid: {
        borderColor: 'rgba(0, 0, 0, 0)', // Set grid border color
        padding: { top: -30, bottom: -8, left: 12, right: 12 } // Set grid padding
    },
    tooltip: {
        enabled: true, // Enable chart tooltip
        y: { formatter: value => `${value}K` }, // Set y-axis tooltip label formatter
        style: { fontFamily: 'Poppins' } // Set tooltip font family
    },
    markers: { show: false } // Hide chart markers
};

// Create new ApexCharts instance with chart options and render it
const chart = new ApexCharts(document.querySelector('.chart-area'), chartOptions);
chart.render();