/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 117.0, "series": [{"data": [[0.0, 2.0], [0.1, 3.0], [0.2, 3.0], [0.3, 3.0], [0.4, 4.0], [0.5, 4.0], [0.6, 4.0], [0.7, 4.0], [0.8, 4.0], [0.9, 4.0], [1.0, 4.0], [1.1, 5.0], [1.2, 5.0], [1.3, 5.0], [1.4, 5.0], [1.5, 5.0], [1.6, 5.0], [1.7, 5.0], [1.8, 5.0], [1.9, 5.0], [2.0, 5.0], [2.1, 5.0], [2.2, 5.0], [2.3, 6.0], [2.4, 6.0], [2.5, 6.0], [2.6, 6.0], [2.7, 6.0], [2.8, 6.0], [2.9, 6.0], [3.0, 6.0], [3.1, 6.0], [3.2, 6.0], [3.3, 6.0], [3.4, 6.0], [3.5, 6.0], [3.6, 6.0], [3.7, 6.0], [3.8, 6.0], [3.9, 6.0], [4.0, 6.0], [4.1, 7.0], [4.2, 7.0], [4.3, 7.0], [4.4, 7.0], [4.5, 7.0], [4.6, 7.0], [4.7, 7.0], [4.8, 7.0], [4.9, 7.0], [5.0, 7.0], [5.1, 7.0], [5.2, 7.0], [5.3, 7.0], [5.4, 7.0], [5.5, 7.0], [5.6, 7.0], [5.7, 7.0], [5.8, 7.0], [5.9, 7.0], [6.0, 7.0], [6.1, 8.0], [6.2, 8.0], [6.3, 8.0], [6.4, 8.0], [6.5, 8.0], [6.6, 8.0], [6.7, 8.0], [6.8, 8.0], [6.9, 8.0], [7.0, 8.0], [7.1, 8.0], [7.2, 8.0], [7.3, 8.0], [7.4, 8.0], [7.5, 8.0], [7.6, 8.0], [7.7, 8.0], [7.8, 8.0], [7.9, 8.0], [8.0, 8.0], [8.1, 8.0], [8.2, 8.0], [8.3, 8.0], [8.4, 8.0], [8.5, 8.0], [8.6, 9.0], [8.7, 9.0], [8.8, 9.0], [8.9, 9.0], [9.0, 9.0], [9.1, 9.0], [9.2, 9.0], [9.3, 9.0], [9.4, 9.0], [9.5, 9.0], [9.6, 9.0], [9.7, 9.0], [9.8, 9.0], [9.9, 9.0], [10.0, 9.0], [10.1, 9.0], [10.2, 9.0], [10.3, 9.0], [10.4, 9.0], [10.5, 9.0], [10.6, 9.0], [10.7, 9.0], [10.8, 9.0], [10.9, 9.0], [11.0, 9.0], [11.1, 9.0], [11.2, 9.0], [11.3, 9.0], [11.4, 10.0], [11.5, 10.0], [11.6, 10.0], [11.7, 10.0], [11.8, 10.0], [11.9, 10.0], [12.0, 10.0], [12.1, 10.0], [12.2, 10.0], [12.3, 10.0], [12.4, 10.0], [12.5, 10.0], [12.6, 10.0], [12.7, 10.0], [12.8, 10.0], [12.9, 10.0], [13.0, 10.0], [13.1, 10.0], [13.2, 10.0], [13.3, 10.0], [13.4, 10.0], [13.5, 10.0], [13.6, 10.0], [13.7, 10.0], [13.8, 10.0], [13.9, 10.0], [14.0, 10.0], [14.1, 10.0], [14.2, 10.0], [14.3, 11.0], [14.4, 11.0], [14.5, 11.0], [14.6, 11.0], [14.7, 11.0], [14.8, 11.0], [14.9, 11.0], [15.0, 11.0], [15.1, 11.0], [15.2, 11.0], [15.3, 11.0], [15.4, 11.0], [15.5, 11.0], [15.6, 11.0], [15.7, 11.0], [15.8, 11.0], [15.9, 11.0], [16.0, 11.0], [16.1, 11.0], [16.2, 11.0], [16.3, 11.0], [16.4, 11.0], [16.5, 11.0], [16.6, 11.0], [16.7, 11.0], [16.8, 11.0], [16.9, 11.0], [17.0, 11.0], [17.1, 11.0], [17.2, 11.0], [17.3, 12.0], [17.4, 12.0], [17.5, 12.0], [17.6, 12.0], [17.7, 12.0], [17.8, 12.0], [17.9, 12.0], [18.0, 12.0], [18.1, 12.0], [18.2, 12.0], [18.3, 12.0], [18.4, 12.0], [18.5, 12.0], [18.6, 12.0], [18.7, 12.0], [18.8, 12.0], [18.9, 12.0], [19.0, 12.0], [19.1, 12.0], [19.2, 12.0], [19.3, 12.0], [19.4, 12.0], [19.5, 12.0], [19.6, 12.0], [19.7, 12.0], [19.8, 12.0], [19.9, 12.0], [20.0, 12.0], [20.1, 12.0], [20.2, 12.0], [20.3, 12.0], [20.4, 12.0], [20.5, 12.0], [20.6, 13.0], [20.7, 13.0], [20.8, 13.0], [20.9, 13.0], [21.0, 13.0], [21.1, 13.0], [21.2, 13.0], [21.3, 13.0], [21.4, 13.0], [21.5, 13.0], [21.6, 13.0], [21.7, 13.0], [21.8, 13.0], [21.9, 13.0], [22.0, 13.0], [22.1, 13.0], [22.2, 13.0], [22.3, 13.0], [22.4, 13.0], [22.5, 13.0], [22.6, 13.0], [22.7, 13.0], [22.8, 13.0], [22.9, 13.0], [23.0, 13.0], [23.1, 13.0], [23.2, 13.0], [23.3, 13.0], [23.4, 13.0], [23.5, 13.0], [23.6, 13.0], [23.7, 13.0], [23.8, 13.0], [23.9, 14.0], [24.0, 14.0], [24.1, 14.0], [24.2, 14.0], [24.3, 14.0], [24.4, 14.0], [24.5, 14.0], [24.6, 14.0], [24.7, 14.0], [24.8, 14.0], [24.9, 14.0], [25.0, 14.0], [25.1, 14.0], [25.2, 14.0], [25.3, 14.0], [25.4, 14.0], [25.5, 14.0], [25.6, 14.0], [25.7, 14.0], [25.8, 14.0], [25.9, 14.0], [26.0, 14.0], [26.1, 14.0], [26.2, 14.0], [26.3, 14.0], [26.4, 14.0], [26.5, 14.0], [26.6, 14.0], [26.7, 14.0], [26.8, 14.0], [26.9, 14.0], [27.0, 14.0], [27.1, 14.0], [27.2, 14.0], [27.3, 14.0], [27.4, 14.0], [27.5, 15.0], [27.6, 15.0], [27.7, 15.0], [27.8, 15.0], [27.9, 15.0], [28.0, 15.0], [28.1, 15.0], [28.2, 15.0], [28.3, 15.0], [28.4, 15.0], [28.5, 15.0], [28.6, 15.0], [28.7, 15.0], [28.8, 15.0], [28.9, 15.0], [29.0, 15.0], [29.1, 15.0], [29.2, 15.0], [29.3, 15.0], [29.4, 15.0], [29.5, 15.0], [29.6, 15.0], [29.7, 15.0], [29.8, 15.0], [29.9, 15.0], [30.0, 15.0], [30.1, 15.0], [30.2, 15.0], [30.3, 15.0], [30.4, 15.0], [30.5, 15.0], [30.6, 15.0], [30.7, 15.0], [30.8, 15.0], [30.9, 15.0], [31.0, 15.0], [31.1, 15.0], [31.2, 16.0], [31.3, 16.0], [31.4, 16.0], [31.5, 16.0], [31.6, 16.0], [31.7, 16.0], [31.8, 16.0], [31.9, 16.0], [32.0, 16.0], [32.1, 16.0], [32.2, 16.0], [32.3, 16.0], [32.4, 16.0], [32.5, 16.0], [32.6, 16.0], [32.7, 16.0], [32.8, 16.0], [32.9, 16.0], [33.0, 16.0], [33.1, 16.0], [33.2, 16.0], [33.3, 16.0], [33.4, 16.0], [33.5, 16.0], [33.6, 16.0], [33.7, 16.0], [33.8, 16.0], [33.9, 16.0], [34.0, 16.0], [34.1, 16.0], [34.2, 16.0], [34.3, 16.0], [34.4, 16.0], [34.5, 16.0], [34.6, 16.0], [34.7, 16.0], [34.8, 17.0], [34.9, 17.0], [35.0, 17.0], [35.1, 17.0], [35.2, 17.0], [35.3, 17.0], [35.4, 17.0], [35.5, 17.0], [35.6, 17.0], [35.7, 17.0], [35.8, 17.0], [35.9, 17.0], [36.0, 17.0], [36.1, 17.0], [36.2, 17.0], [36.3, 17.0], [36.4, 17.0], [36.5, 17.0], [36.6, 17.0], [36.7, 17.0], [36.8, 17.0], [36.9, 17.0], [37.0, 17.0], [37.1, 17.0], [37.2, 17.0], [37.3, 17.0], [37.4, 17.0], [37.5, 17.0], [37.6, 17.0], [37.7, 17.0], [37.8, 17.0], [37.9, 17.0], [38.0, 17.0], [38.1, 17.0], [38.2, 17.0], [38.3, 17.0], [38.4, 18.0], [38.5, 18.0], [38.6, 18.0], [38.7, 18.0], [38.8, 18.0], [38.9, 18.0], [39.0, 18.0], [39.1, 18.0], [39.2, 18.0], [39.3, 18.0], [39.4, 18.0], [39.5, 18.0], [39.6, 18.0], [39.7, 18.0], [39.8, 18.0], [39.9, 18.0], [40.0, 18.0], [40.1, 18.0], [40.2, 18.0], [40.3, 18.0], [40.4, 18.0], [40.5, 18.0], [40.6, 18.0], [40.7, 18.0], [40.8, 18.0], [40.9, 18.0], [41.0, 18.0], [41.1, 18.0], [41.2, 18.0], [41.3, 18.0], [41.4, 18.0], [41.5, 18.0], [41.6, 18.0], [41.7, 18.0], [41.8, 18.0], [41.9, 18.0], [42.0, 18.0], [42.1, 18.0], [42.2, 18.0], [42.3, 18.0], [42.4, 18.0], [42.5, 18.0], [42.6, 18.0], [42.7, 18.0], [42.8, 18.0], [42.9, 18.0], [43.0, 19.0], [43.1, 19.0], [43.2, 19.0], [43.3, 19.0], [43.4, 19.0], [43.5, 19.0], [43.6, 19.0], [43.7, 19.0], [43.8, 19.0], [43.9, 19.0], [44.0, 19.0], [44.1, 19.0], [44.2, 19.0], [44.3, 19.0], [44.4, 19.0], [44.5, 19.0], [44.6, 19.0], [44.7, 19.0], [44.8, 19.0], [44.9, 19.0], [45.0, 19.0], [45.1, 19.0], [45.2, 19.0], [45.3, 19.0], [45.4, 19.0], [45.5, 19.0], [45.6, 19.0], [45.7, 19.0], [45.8, 19.0], [45.9, 19.0], [46.0, 19.0], [46.1, 19.0], [46.2, 19.0], [46.3, 19.0], [46.4, 19.0], [46.5, 19.0], [46.6, 19.0], [46.7, 19.0], [46.8, 19.0], [46.9, 19.0], [47.0, 19.0], [47.1, 19.0], [47.2, 19.0], [47.3, 19.0], [47.4, 19.0], [47.5, 19.0], [47.6, 19.0], [47.7, 19.0], [47.8, 20.0], [47.9, 20.0], [48.0, 20.0], [48.1, 20.0], [48.2, 20.0], [48.3, 20.0], [48.4, 20.0], [48.5, 20.0], [48.6, 20.0], [48.7, 20.0], [48.8, 20.0], [48.9, 20.0], [49.0, 20.0], [49.1, 20.0], [49.2, 20.0], [49.3, 20.0], [49.4, 20.0], [49.5, 20.0], [49.6, 20.0], [49.7, 20.0], [49.8, 20.0], [49.9, 20.0], [50.0, 20.0], [50.1, 20.0], [50.2, 20.0], [50.3, 20.0], [50.4, 20.0], [50.5, 20.0], [50.6, 20.0], [50.7, 20.0], [50.8, 20.0], [50.9, 20.0], [51.0, 20.0], [51.1, 20.0], [51.2, 20.0], [51.3, 20.0], [51.4, 20.0], [51.5, 20.0], [51.6, 20.0], [51.7, 20.0], [51.8, 20.0], [51.9, 20.0], [52.0, 20.0], [52.1, 20.0], [52.2, 20.0], [52.3, 20.0], [52.4, 20.0], [52.5, 20.0], [52.6, 21.0], [52.7, 21.0], [52.8, 21.0], [52.9, 21.0], [53.0, 21.0], [53.1, 21.0], [53.2, 21.0], [53.3, 21.0], [53.4, 21.0], [53.5, 21.0], [53.6, 21.0], [53.7, 21.0], [53.8, 21.0], [53.9, 21.0], [54.0, 21.0], [54.1, 21.0], [54.2, 21.0], [54.3, 21.0], [54.4, 21.0], [54.5, 21.0], [54.6, 21.0], [54.7, 21.0], [54.8, 21.0], [54.9, 21.0], [55.0, 21.0], [55.1, 21.0], [55.2, 21.0], [55.3, 21.0], [55.4, 21.0], [55.5, 21.0], [55.6, 21.0], [55.7, 21.0], [55.8, 21.0], [55.9, 21.0], [56.0, 21.0], [56.1, 21.0], [56.2, 21.0], [56.3, 21.0], [56.4, 21.0], [56.5, 21.0], [56.6, 21.0], [56.7, 21.0], [56.8, 21.0], [56.9, 21.0], [57.0, 21.0], [57.1, 22.0], [57.2, 22.0], [57.3, 22.0], [57.4, 22.0], [57.5, 22.0], [57.6, 22.0], [57.7, 22.0], [57.8, 22.0], [57.9, 22.0], [58.0, 22.0], [58.1, 22.0], [58.2, 22.0], [58.3, 22.0], [58.4, 22.0], [58.5, 22.0], [58.6, 22.0], [58.7, 22.0], [58.8, 22.0], [58.9, 22.0], [59.0, 22.0], [59.1, 22.0], [59.2, 22.0], [59.3, 22.0], [59.4, 22.0], [59.5, 22.0], [59.6, 22.0], [59.7, 22.0], [59.8, 22.0], [59.9, 22.0], [60.0, 22.0], [60.1, 22.0], [60.2, 22.0], [60.3, 22.0], [60.4, 22.0], [60.5, 22.0], [60.6, 22.0], [60.7, 22.0], [60.8, 22.0], [60.9, 22.0], [61.0, 22.0], [61.1, 22.0], [61.2, 22.0], [61.3, 22.0], [61.4, 23.0], [61.5, 23.0], [61.6, 23.0], [61.7, 23.0], [61.8, 23.0], [61.9, 23.0], [62.0, 23.0], [62.1, 23.0], [62.2, 23.0], [62.3, 23.0], [62.4, 23.0], [62.5, 23.0], [62.6, 23.0], [62.7, 23.0], [62.8, 23.0], [62.9, 23.0], [63.0, 23.0], [63.1, 23.0], [63.2, 23.0], [63.3, 23.0], [63.4, 23.0], [63.5, 23.0], [63.6, 23.0], [63.7, 23.0], [63.8, 23.0], [63.9, 23.0], [64.0, 23.0], [64.1, 23.0], [64.2, 23.0], [64.3, 23.0], [64.4, 23.0], [64.5, 23.0], [64.6, 23.0], [64.7, 23.0], [64.8, 23.0], [64.9, 23.0], [65.0, 23.0], [65.1, 23.0], [65.2, 23.0], [65.3, 23.0], [65.4, 23.0], [65.5, 23.0], [65.6, 23.0], [65.7, 23.0], [65.8, 23.0], [65.9, 24.0], [66.0, 24.0], [66.1, 24.0], [66.2, 24.0], [66.3, 24.0], [66.4, 24.0], [66.5, 24.0], [66.6, 24.0], [66.7, 24.0], [66.8, 24.0], [66.9, 24.0], [67.0, 24.0], [67.1, 24.0], [67.2, 24.0], [67.3, 24.0], [67.4, 24.0], [67.5, 24.0], [67.6, 24.0], [67.7, 24.0], [67.8, 24.0], [67.9, 24.0], [68.0, 24.0], [68.1, 24.0], [68.2, 24.0], [68.3, 24.0], [68.4, 24.0], [68.5, 24.0], [68.6, 24.0], [68.7, 24.0], [68.8, 24.0], [68.9, 24.0], [69.0, 24.0], [69.1, 24.0], [69.2, 24.0], [69.3, 24.0], [69.4, 24.0], [69.5, 24.0], [69.6, 24.0], [69.7, 25.0], [69.8, 25.0], [69.9, 25.0], [70.0, 25.0], [70.1, 25.0], [70.2, 25.0], [70.3, 25.0], [70.4, 25.0], [70.5, 25.0], [70.6, 25.0], [70.7, 25.0], [70.8, 25.0], [70.9, 25.0], [71.0, 25.0], [71.1, 25.0], [71.2, 25.0], [71.3, 25.0], [71.4, 25.0], [71.5, 25.0], [71.6, 25.0], [71.7, 25.0], [71.8, 25.0], [71.9, 25.0], [72.0, 25.0], [72.1, 25.0], [72.2, 25.0], [72.3, 25.0], [72.4, 25.0], [72.5, 25.0], [72.6, 25.0], [72.7, 25.0], [72.8, 25.0], [72.9, 25.0], [73.0, 25.0], [73.1, 25.0], [73.2, 26.0], [73.3, 26.0], [73.4, 26.0], [73.5, 26.0], [73.6, 26.0], [73.7, 26.0], [73.8, 26.0], [73.9, 26.0], [74.0, 26.0], [74.1, 26.0], [74.2, 26.0], [74.3, 26.0], [74.4, 26.0], [74.5, 26.0], [74.6, 26.0], [74.7, 26.0], [74.8, 26.0], [74.9, 26.0], [75.0, 26.0], [75.1, 26.0], [75.2, 26.0], [75.3, 26.0], [75.4, 26.0], [75.5, 26.0], [75.6, 26.0], [75.7, 26.0], [75.8, 26.0], [75.9, 26.0], [76.0, 26.0], [76.1, 26.0], [76.2, 26.0], [76.3, 27.0], [76.4, 27.0], [76.5, 27.0], [76.6, 27.0], [76.7, 27.0], [76.8, 27.0], [76.9, 27.0], [77.0, 27.0], [77.1, 27.0], [77.2, 27.0], [77.3, 27.0], [77.4, 27.0], [77.5, 27.0], [77.6, 27.0], [77.7, 27.0], [77.8, 27.0], [77.9, 27.0], [78.0, 27.0], [78.1, 27.0], [78.2, 27.0], [78.3, 27.0], [78.4, 27.0], [78.5, 27.0], [78.6, 27.0], [78.7, 27.0], [78.8, 27.0], [78.9, 27.0], [79.0, 27.0], [79.1, 27.0], [79.2, 27.0], [79.3, 27.0], [79.4, 27.0], [79.5, 27.0], [79.6, 27.0], [79.7, 28.0], [79.8, 28.0], [79.9, 28.0], [80.0, 28.0], [80.1, 28.0], [80.2, 28.0], [80.3, 28.0], [80.4, 28.0], [80.5, 28.0], [80.6, 28.0], [80.7, 28.0], [80.8, 28.0], [80.9, 28.0], [81.0, 28.0], [81.1, 28.0], [81.2, 28.0], [81.3, 28.0], [81.4, 28.0], [81.5, 28.0], [81.6, 28.0], [81.7, 28.0], [81.8, 28.0], [81.9, 28.0], [82.0, 28.0], [82.1, 28.0], [82.2, 28.0], [82.3, 29.0], [82.4, 29.0], [82.5, 29.0], [82.6, 29.0], [82.7, 29.0], [82.8, 29.0], [82.9, 29.0], [83.0, 29.0], [83.1, 29.0], [83.2, 29.0], [83.3, 29.0], [83.4, 29.0], [83.5, 29.0], [83.6, 29.0], [83.7, 29.0], [83.8, 29.0], [83.9, 29.0], [84.0, 29.0], [84.1, 29.0], [84.2, 29.0], [84.3, 30.0], [84.4, 30.0], [84.5, 30.0], [84.6, 30.0], [84.7, 30.0], [84.8, 30.0], [84.9, 30.0], [85.0, 30.0], [85.1, 30.0], [85.2, 30.0], [85.3, 30.0], [85.4, 30.0], [85.5, 30.0], [85.6, 30.0], [85.7, 30.0], [85.8, 30.0], [85.9, 30.0], [86.0, 30.0], [86.1, 30.0], [86.2, 30.0], [86.3, 30.0], [86.4, 30.0], [86.5, 31.0], [86.6, 31.0], [86.7, 31.0], [86.8, 31.0], [86.9, 31.0], [87.0, 31.0], [87.1, 31.0], [87.2, 31.0], [87.3, 31.0], [87.4, 31.0], [87.5, 31.0], [87.6, 31.0], [87.7, 31.0], [87.8, 31.0], [87.9, 31.0], [88.0, 31.0], [88.1, 32.0], [88.2, 32.0], [88.3, 32.0], [88.4, 32.0], [88.5, 32.0], [88.6, 32.0], [88.7, 32.0], [88.8, 32.0], [88.9, 32.0], [89.0, 32.0], [89.1, 33.0], [89.2, 33.0], [89.3, 33.0], [89.4, 33.0], [89.5, 33.0], [89.6, 33.0], [89.7, 33.0], [89.8, 33.0], [89.9, 33.0], [90.0, 33.0], [90.1, 33.0], [90.2, 33.0], [90.3, 34.0], [90.4, 34.0], [90.5, 34.0], [90.6, 34.0], [90.7, 34.0], [90.8, 34.0], [90.9, 34.0], [91.0, 34.0], [91.1, 34.0], [91.2, 35.0], [91.3, 35.0], [91.4, 35.0], [91.5, 35.0], [91.6, 35.0], [91.7, 35.0], [91.8, 35.0], [91.9, 35.0], [92.0, 35.0], [92.1, 35.0], [92.2, 36.0], [92.3, 36.0], [92.4, 36.0], [92.5, 36.0], [92.6, 36.0], [92.7, 36.0], [92.8, 37.0], [92.9, 37.0], [93.0, 37.0], [93.1, 37.0], [93.2, 37.0], [93.3, 37.0], [93.4, 38.0], [93.5, 38.0], [93.6, 38.0], [93.7, 38.0], [93.8, 38.0], [93.9, 38.0], [94.0, 38.0], [94.1, 39.0], [94.2, 39.0], [94.3, 39.0], [94.4, 39.0], [94.5, 39.0], [94.6, 39.0], [94.7, 39.0], [94.8, 40.0], [94.9, 40.0], [95.0, 40.0], [95.1, 41.0], [95.2, 41.0], [95.3, 41.0], [95.4, 41.0], [95.5, 42.0], [95.6, 42.0], [95.7, 42.0], [95.8, 42.0], [95.9, 43.0], [96.0, 43.0], [96.1, 44.0], [96.2, 44.0], [96.3, 44.0], [96.4, 45.0], [96.5, 45.0], [96.6, 45.0], [96.7, 46.0], [96.8, 46.0], [96.9, 47.0], [97.0, 47.0], [97.1, 48.0], [97.2, 48.0], [97.3, 49.0], [97.4, 50.0], [97.5, 50.0], [97.6, 50.0], [97.7, 51.0], [97.8, 52.0], [97.9, 52.0], [98.0, 53.0], [98.1, 53.0], [98.2, 54.0], [98.3, 55.0], [98.4, 56.0], [98.5, 57.0], [98.6, 58.0], [98.7, 59.0], [98.8, 60.0], [98.9, 61.0], [99.0, 61.0], [99.1, 63.0], [99.2, 64.0], [99.3, 66.0], [99.4, 68.0], [99.5, 73.0], [99.6, 76.0], [99.7, 79.0], [99.8, 85.0], [99.9, 89.0]], "isOverall": false, "label": "Telemetria küldés", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 9995.0, "series": [{"data": [[0.0, 9995.0], [100.0, 5.0]], "isOverall": false, "label": "Telemetria küldés", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 10000.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 10000.0, "series": [{"data": [[0.0, 10000.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 81.61640000000023, "minX": 1.62032124E12, "maxY": 81.61640000000023, "series": [{"data": [[1.62032124E12, 81.61640000000023]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62032124E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 2.0, "minX": 1.0, "maxY": 34.0, "series": [{"data": [[2.0, 3.0], [3.0, 4.0], [4.0, 3.5], [5.0, 3.4444444444444446], [6.0, 3.3333333333333335], [7.0, 3.6666666666666665], [8.0, 4.8], [9.0, 4.0], [10.0, 5.0], [11.0, 4.7142857142857135], [14.0, 5.888888888888889], [15.0, 4.0], [16.0, 25.82142857142857], [17.0, 5.230769230769231], [18.0, 7.2413793103448265], [19.0, 10.631578947368421], [20.0, 8.6875], [21.0, 8.807692307692308], [22.0, 10.708333333333334], [23.0, 10.125000000000002], [24.0, 9.961538461538462], [25.0, 8.777777777777777], [26.0, 9.073170731707318], [27.0, 8.618181818181812], [28.0, 12.81818181818182], [29.0, 9.566666666666666], [30.0, 9.153846153846155], [31.0, 17.208333333333336], [32.0, 10.357142857142858], [33.0, 6.9523809523809526], [35.0, 17.555555555555557], [34.0, 11.816666666666666], [36.0, 9.374999999999998], [37.0, 11.866666666666667], [38.0, 11.617647058823529], [39.0, 12.500000000000002], [40.0, 12.80952380952381], [41.0, 15.10666666666667], [42.0, 15.821428571428568], [43.0, 12.236363636363638], [44.0, 10.862068965517242], [45.0, 10.474747474747474], [46.0, 11.847457627118644], [47.0, 11.673913043478263], [48.0, 11.0], [49.0, 15.616438356164386], [51.0, 12.212121212121215], [50.0, 12.548387096774198], [52.0, 11.5], [53.0, 14.815789473684212], [54.0, 14.038461538461537], [55.0, 18.153846153846153], [56.0, 19.37662337662338], [57.0, 15.417910447761196], [58.0, 13.937499999999998], [59.0, 18.448979591836732], [60.0, 20.514285714285712], [61.0, 24.26153846153846], [62.0, 17.596491228070175], [63.0, 19.326315789473686], [64.0, 15.883333333333335], [65.0, 20.46728971962616], [66.0, 22.93333333333333], [67.0, 19.444444444444454], [68.0, 34.0], [69.0, 29.21428571428572], [70.0, 14.919191919191919], [71.0, 15.728155339805825], [72.0, 19.611111111111107], [73.0, 18.57142857142857], [74.0, 17.285714285714292], [75.0, 22.654320987654323], [76.0, 24.26229508196721], [77.0, 19.2707182320442], [78.0, 21.47500000000001], [79.0, 22.540540540540533], [80.0, 21.155172413793103], [81.0, 25.017857142857142], [82.0, 24.02857142857144], [83.0, 19.689655172413794], [84.0, 19.180327868852455], [85.0, 22.874125874125887], [86.0, 21.09230769230769], [87.0, 22.07978723404256], [90.0, 22.881355932203395], [91.0, 27.523809523809522], [89.0, 25.342105263157897], [88.0, 20.75], [92.0, 21.516129032258064], [93.0, 24.267857142857146], [94.0, 31.045454545454547], [95.0, 23.75384615384616], [96.0, 22.525139664804474], [97.0, 23.62869198312235], [98.0, 20.976744186046513], [99.0, 21.720000000000002], [100.0, 24.786744136001733], [1.0, 2.0]], "isOverall": false, "label": "Telemetria küldés", "isController": false}, {"data": [[81.61659999999985, 21.221799999999888]], "isOverall": false, "label": "Telemetria küldés-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 33166.666666666664, "minX": 1.62032124E12, "maxY": 94500.0, "series": [{"data": [[1.62032124E12, 33166.666666666664]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62032124E12, 94500.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62032124E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 21.221799999999888, "minX": 1.62032124E12, "maxY": 21.221799999999888, "series": [{"data": [[1.62032124E12, 21.221799999999888]], "isOverall": false, "label": "Telemetria küldés", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62032124E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 21.203399999999984, "minX": 1.62032124E12, "maxY": 21.203399999999984, "series": [{"data": [[1.62032124E12, 21.203399999999984]], "isOverall": false, "label": "Telemetria küldés", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62032124E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.04500000000000016, "minX": 1.62032124E12, "maxY": 0.04500000000000016, "series": [{"data": [[1.62032124E12, 0.04500000000000016]], "isOverall": false, "label": "Telemetria küldés", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62032124E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 2.0, "minX": 1.62032124E12, "maxY": 117.0, "series": [{"data": [[1.62032124E12, 117.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62032124E12, 33.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62032124E12, 61.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62032124E12, 40.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62032124E12, 2.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62032124E12, 20.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62032124E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 10.0, "minX": 1116.0, "maxY": 24.0, "series": [{"data": [[1116.0, 10.0], [1288.0, 13.0], [3603.0, 24.0], [3993.0, 20.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3993.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 10.0, "minX": 1116.0, "maxY": 24.0, "series": [{"data": [[1116.0, 10.0], [1288.0, 13.0], [3603.0, 24.0], [3993.0, 20.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3993.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 166.66666666666666, "minX": 1.62032124E12, "maxY": 166.66666666666666, "series": [{"data": [[1.62032124E12, 166.66666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62032124E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 166.66666666666666, "minX": 1.62032124E12, "maxY": 166.66666666666666, "series": [{"data": [[1.62032124E12, 166.66666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62032124E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 166.66666666666666, "minX": 1.62032124E12, "maxY": 166.66666666666666, "series": [{"data": [[1.62032124E12, 166.66666666666666]], "isOverall": false, "label": "Telemetria küldés-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62032124E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 166.66666666666666, "minX": 1.62032124E12, "maxY": 166.66666666666666, "series": [{"data": [[1.62032124E12, 166.66666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62032124E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

