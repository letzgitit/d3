import * as d3 from 'd3'

var scatterData = [{ friends: 5, salary: 22000 },
{ friends: 3, salary: 18000 }, { friends: 10, salary: 88000 },
{ friends: 0, salary: 180000 }, { friends: 27, salary: 56000 },
{ friends: 8, salary: 74000 }]

var xExtent = d3.extent(scatterData, d=> d.salary)
var yExtent = d3.extent(scatterData, d=> d.friends)

var xScale = d3.scaleLinear().domain(xExtent).range([0,500])
var yScale = d3.scaleLinear().domain(yExtent).range([0,500])

function test(instance) {
    const targetContainer = instance.$el
    d3.select(targetContainer).append('svg')

    d3.select('svg').selectAll('circle')
        .data(scatterData).enter().append('circle')
        .attr('r', 5).attr('cx', d => xScale(d.salary))
        .attr('cy', d => yScale(d.friends))
}

export {
    test
}