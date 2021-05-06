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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 1280.0, "series": [{"data": [[0.0, 3.0], [0.1, 6.0], [0.2, 9.0], [0.3, 11.0], [0.4, 13.0], [0.5, 14.0], [0.6, 15.0], [0.7, 16.0], [0.8, 17.0], [0.9, 18.0], [1.0, 18.0], [1.1, 19.0], [1.2, 19.0], [1.3, 20.0], [1.4, 20.0], [1.5, 21.0], [1.6, 21.0], [1.7, 22.0], [1.8, 22.0], [1.9, 24.0], [2.0, 24.0], [2.1, 25.0], [2.2, 26.0], [2.3, 27.0], [2.4, 29.0], [2.5, 30.0], [2.6, 31.0], [2.7, 33.0], [2.8, 34.0], [2.9, 34.0], [3.0, 35.0], [3.1, 36.0], [3.2, 37.0], [3.3, 38.0], [3.4, 38.0], [3.5, 39.0], [3.6, 40.0], [3.7, 41.0], [3.8, 42.0], [3.9, 42.0], [4.0, 43.0], [4.1, 43.0], [4.2, 44.0], [4.3, 45.0], [4.4, 45.0], [4.5, 46.0], [4.6, 46.0], [4.7, 47.0], [4.8, 47.0], [4.9, 48.0], [5.0, 48.0], [5.1, 48.0], [5.2, 49.0], [5.3, 49.0], [5.4, 49.0], [5.5, 50.0], [5.6, 50.0], [5.7, 50.0], [5.8, 51.0], [5.9, 51.0], [6.0, 52.0], [6.1, 52.0], [6.2, 52.0], [6.3, 53.0], [6.4, 53.0], [6.5, 53.0], [6.6, 54.0], [6.7, 54.0], [6.8, 54.0], [6.9, 54.0], [7.0, 55.0], [7.1, 55.0], [7.2, 55.0], [7.3, 55.0], [7.4, 56.0], [7.5, 56.0], [7.6, 56.0], [7.7, 57.0], [7.8, 57.0], [7.9, 57.0], [8.0, 58.0], [8.1, 58.0], [8.2, 58.0], [8.3, 58.0], [8.4, 59.0], [8.5, 59.0], [8.6, 59.0], [8.7, 59.0], [8.8, 60.0], [8.9, 60.0], [9.0, 60.0], [9.1, 60.0], [9.2, 60.0], [9.3, 61.0], [9.4, 61.0], [9.5, 61.0], [9.6, 61.0], [9.7, 61.0], [9.8, 62.0], [9.9, 62.0], [10.0, 62.0], [10.1, 62.0], [10.2, 62.0], [10.3, 62.0], [10.4, 63.0], [10.5, 63.0], [10.6, 63.0], [10.7, 63.0], [10.8, 64.0], [10.9, 64.0], [11.0, 64.0], [11.1, 64.0], [11.2, 64.0], [11.3, 64.0], [11.4, 65.0], [11.5, 65.0], [11.6, 65.0], [11.7, 65.0], [11.8, 66.0], [11.9, 66.0], [12.0, 66.0], [12.1, 66.0], [12.2, 66.0], [12.3, 67.0], [12.4, 67.0], [12.5, 67.0], [12.6, 67.0], [12.7, 67.0], [12.8, 68.0], [12.9, 68.0], [13.0, 68.0], [13.1, 68.0], [13.2, 69.0], [13.3, 69.0], [13.4, 69.0], [13.5, 69.0], [13.6, 70.0], [13.7, 70.0], [13.8, 70.0], [13.9, 70.0], [14.0, 71.0], [14.1, 71.0], [14.2, 71.0], [14.3, 71.0], [14.4, 72.0], [14.5, 72.0], [14.6, 72.0], [14.7, 72.0], [14.8, 72.0], [14.9, 72.0], [15.0, 73.0], [15.1, 73.0], [15.2, 73.0], [15.3, 73.0], [15.4, 73.0], [15.5, 74.0], [15.6, 74.0], [15.7, 74.0], [15.8, 74.0], [15.9, 74.0], [16.0, 75.0], [16.1, 75.0], [16.2, 75.0], [16.3, 75.0], [16.4, 75.0], [16.5, 76.0], [16.6, 76.0], [16.7, 76.0], [16.8, 76.0], [16.9, 76.0], [17.0, 76.0], [17.1, 76.0], [17.2, 77.0], [17.3, 77.0], [17.4, 77.0], [17.5, 78.0], [17.6, 78.0], [17.7, 78.0], [17.8, 78.0], [17.9, 78.0], [18.0, 78.0], [18.1, 79.0], [18.2, 79.0], [18.3, 79.0], [18.4, 79.0], [18.5, 80.0], [18.6, 80.0], [18.7, 80.0], [18.8, 80.0], [18.9, 80.0], [19.0, 81.0], [19.1, 81.0], [19.2, 81.0], [19.3, 81.0], [19.4, 81.0], [19.5, 82.0], [19.6, 82.0], [19.7, 82.0], [19.8, 82.0], [19.9, 82.0], [20.0, 83.0], [20.1, 83.0], [20.2, 83.0], [20.3, 83.0], [20.4, 83.0], [20.5, 83.0], [20.6, 83.0], [20.7, 84.0], [20.8, 84.0], [20.9, 84.0], [21.0, 84.0], [21.1, 84.0], [21.2, 85.0], [21.3, 85.0], [21.4, 85.0], [21.5, 85.0], [21.6, 86.0], [21.7, 86.0], [21.8, 86.0], [21.9, 86.0], [22.0, 86.0], [22.1, 86.0], [22.2, 86.0], [22.3, 87.0], [22.4, 87.0], [22.5, 87.0], [22.6, 87.0], [22.7, 87.0], [22.8, 87.0], [22.9, 88.0], [23.0, 88.0], [23.1, 88.0], [23.2, 88.0], [23.3, 88.0], [23.4, 89.0], [23.5, 89.0], [23.6, 89.0], [23.7, 89.0], [23.8, 89.0], [23.9, 90.0], [24.0, 90.0], [24.1, 90.0], [24.2, 90.0], [24.3, 90.0], [24.4, 91.0], [24.5, 91.0], [24.6, 91.0], [24.7, 92.0], [24.8, 92.0], [24.9, 92.0], [25.0, 92.0], [25.1, 92.0], [25.2, 93.0], [25.3, 93.0], [25.4, 93.0], [25.5, 94.0], [25.6, 94.0], [25.7, 94.0], [25.8, 94.0], [25.9, 95.0], [26.0, 95.0], [26.1, 95.0], [26.2, 95.0], [26.3, 96.0], [26.4, 96.0], [26.5, 96.0], [26.6, 96.0], [26.7, 96.0], [26.8, 96.0], [26.9, 97.0], [27.0, 97.0], [27.1, 97.0], [27.2, 97.0], [27.3, 98.0], [27.4, 98.0], [27.5, 98.0], [27.6, 98.0], [27.7, 99.0], [27.8, 99.0], [27.9, 99.0], [28.0, 99.0], [28.1, 100.0], [28.2, 100.0], [28.3, 101.0], [28.4, 101.0], [28.5, 101.0], [28.6, 101.0], [28.7, 102.0], [28.8, 102.0], [28.9, 102.0], [29.0, 103.0], [29.1, 103.0], [29.2, 104.0], [29.3, 104.0], [29.4, 104.0], [29.5, 104.0], [29.6, 105.0], [29.7, 105.0], [29.8, 105.0], [29.9, 106.0], [30.0, 106.0], [30.1, 106.0], [30.2, 107.0], [30.3, 107.0], [30.4, 108.0], [30.5, 108.0], [30.6, 109.0], [30.7, 109.0], [30.8, 110.0], [30.9, 110.0], [31.0, 110.0], [31.1, 111.0], [31.2, 111.0], [31.3, 112.0], [31.4, 112.0], [31.5, 113.0], [31.6, 113.0], [31.7, 113.0], [31.8, 114.0], [31.9, 115.0], [32.0, 115.0], [32.1, 115.0], [32.2, 116.0], [32.3, 116.0], [32.4, 116.0], [32.5, 116.0], [32.6, 117.0], [32.7, 117.0], [32.8, 118.0], [32.9, 118.0], [33.0, 119.0], [33.1, 119.0], [33.2, 119.0], [33.3, 119.0], [33.4, 120.0], [33.5, 120.0], [33.6, 120.0], [33.7, 121.0], [33.8, 121.0], [33.9, 121.0], [34.0, 121.0], [34.1, 121.0], [34.2, 122.0], [34.3, 122.0], [34.4, 122.0], [34.5, 123.0], [34.6, 123.0], [34.7, 123.0], [34.8, 123.0], [34.9, 124.0], [35.0, 124.0], [35.1, 125.0], [35.2, 125.0], [35.3, 125.0], [35.4, 125.0], [35.5, 126.0], [35.6, 126.0], [35.7, 126.0], [35.8, 127.0], [35.9, 127.0], [36.0, 127.0], [36.1, 127.0], [36.2, 128.0], [36.3, 128.0], [36.4, 129.0], [36.5, 129.0], [36.6, 129.0], [36.7, 129.0], [36.8, 129.0], [36.9, 129.0], [37.0, 130.0], [37.1, 130.0], [37.2, 130.0], [37.3, 131.0], [37.4, 131.0], [37.5, 131.0], [37.6, 132.0], [37.7, 132.0], [37.8, 132.0], [37.9, 132.0], [38.0, 133.0], [38.1, 133.0], [38.2, 133.0], [38.3, 133.0], [38.4, 133.0], [38.5, 134.0], [38.6, 134.0], [38.7, 134.0], [38.8, 134.0], [38.9, 134.0], [39.0, 134.0], [39.1, 134.0], [39.2, 135.0], [39.3, 135.0], [39.4, 135.0], [39.5, 135.0], [39.6, 136.0], [39.7, 136.0], [39.8, 136.0], [39.9, 136.0], [40.0, 136.0], [40.1, 137.0], [40.2, 137.0], [40.3, 137.0], [40.4, 138.0], [40.5, 138.0], [40.6, 138.0], [40.7, 138.0], [40.8, 139.0], [40.9, 139.0], [41.0, 139.0], [41.1, 139.0], [41.2, 140.0], [41.3, 140.0], [41.4, 140.0], [41.5, 140.0], [41.6, 141.0], [41.7, 141.0], [41.8, 141.0], [41.9, 141.0], [42.0, 142.0], [42.1, 142.0], [42.2, 142.0], [42.3, 143.0], [42.4, 143.0], [42.5, 143.0], [42.6, 143.0], [42.7, 143.0], [42.8, 144.0], [42.9, 144.0], [43.0, 144.0], [43.1, 144.0], [43.2, 145.0], [43.3, 145.0], [43.4, 145.0], [43.5, 145.0], [43.6, 145.0], [43.7, 146.0], [43.8, 146.0], [43.9, 146.0], [44.0, 146.0], [44.1, 146.0], [44.2, 146.0], [44.3, 147.0], [44.4, 147.0], [44.5, 147.0], [44.6, 147.0], [44.7, 147.0], [44.8, 148.0], [44.9, 148.0], [45.0, 148.0], [45.1, 148.0], [45.2, 148.0], [45.3, 149.0], [45.4, 149.0], [45.5, 149.0], [45.6, 149.0], [45.7, 149.0], [45.8, 149.0], [45.9, 150.0], [46.0, 150.0], [46.1, 150.0], [46.2, 150.0], [46.3, 150.0], [46.4, 150.0], [46.5, 151.0], [46.6, 151.0], [46.7, 151.0], [46.8, 151.0], [46.9, 151.0], [47.0, 151.0], [47.1, 151.0], [47.2, 152.0], [47.3, 152.0], [47.4, 152.0], [47.5, 152.0], [47.6, 152.0], [47.7, 152.0], [47.8, 152.0], [47.9, 153.0], [48.0, 153.0], [48.1, 153.0], [48.2, 153.0], [48.3, 153.0], [48.4, 153.0], [48.5, 153.0], [48.6, 154.0], [48.7, 154.0], [48.8, 154.0], [48.9, 154.0], [49.0, 154.0], [49.1, 155.0], [49.2, 155.0], [49.3, 155.0], [49.4, 155.0], [49.5, 155.0], [49.6, 155.0], [49.7, 156.0], [49.8, 156.0], [49.9, 156.0], [50.0, 156.0], [50.1, 156.0], [50.2, 157.0], [50.3, 157.0], [50.4, 157.0], [50.5, 157.0], [50.6, 157.0], [50.7, 157.0], [50.8, 157.0], [50.9, 157.0], [51.0, 158.0], [51.1, 158.0], [51.2, 158.0], [51.3, 158.0], [51.4, 158.0], [51.5, 158.0], [51.6, 159.0], [51.7, 159.0], [51.8, 159.0], [51.9, 159.0], [52.0, 159.0], [52.1, 159.0], [52.2, 159.0], [52.3, 160.0], [52.4, 160.0], [52.5, 160.0], [52.6, 160.0], [52.7, 160.0], [52.8, 160.0], [52.9, 161.0], [53.0, 161.0], [53.1, 161.0], [53.2, 161.0], [53.3, 161.0], [53.4, 161.0], [53.5, 162.0], [53.6, 162.0], [53.7, 162.0], [53.8, 162.0], [53.9, 162.0], [54.0, 162.0], [54.1, 163.0], [54.2, 163.0], [54.3, 163.0], [54.4, 163.0], [54.5, 163.0], [54.6, 163.0], [54.7, 163.0], [54.8, 164.0], [54.9, 164.0], [55.0, 164.0], [55.1, 164.0], [55.2, 164.0], [55.3, 164.0], [55.4, 164.0], [55.5, 165.0], [55.6, 165.0], [55.7, 165.0], [55.8, 165.0], [55.9, 165.0], [56.0, 165.0], [56.1, 165.0], [56.2, 166.0], [56.3, 166.0], [56.4, 166.0], [56.5, 166.0], [56.6, 166.0], [56.7, 166.0], [56.8, 166.0], [56.9, 166.0], [57.0, 167.0], [57.1, 167.0], [57.2, 167.0], [57.3, 167.0], [57.4, 167.0], [57.5, 167.0], [57.6, 167.0], [57.7, 168.0], [57.8, 168.0], [57.9, 168.0], [58.0, 168.0], [58.1, 168.0], [58.2, 168.0], [58.3, 169.0], [58.4, 169.0], [58.5, 169.0], [58.6, 169.0], [58.7, 169.0], [58.8, 169.0], [58.9, 169.0], [59.0, 169.0], [59.1, 169.0], [59.2, 170.0], [59.3, 170.0], [59.4, 170.0], [59.5, 170.0], [59.6, 170.0], [59.7, 170.0], [59.8, 170.0], [59.9, 170.0], [60.0, 171.0], [60.1, 171.0], [60.2, 171.0], [60.3, 171.0], [60.4, 171.0], [60.5, 171.0], [60.6, 171.0], [60.7, 171.0], [60.8, 171.0], [60.9, 172.0], [61.0, 172.0], [61.1, 172.0], [61.2, 172.0], [61.3, 172.0], [61.4, 172.0], [61.5, 172.0], [61.6, 173.0], [61.7, 173.0], [61.8, 173.0], [61.9, 173.0], [62.0, 173.0], [62.1, 173.0], [62.2, 174.0], [62.3, 174.0], [62.4, 174.0], [62.5, 174.0], [62.6, 174.0], [62.7, 174.0], [62.8, 174.0], [62.9, 174.0], [63.0, 174.0], [63.1, 175.0], [63.2, 175.0], [63.3, 175.0], [63.4, 175.0], [63.5, 175.0], [63.6, 175.0], [63.7, 175.0], [63.8, 175.0], [63.9, 176.0], [64.0, 176.0], [64.1, 176.0], [64.2, 176.0], [64.3, 176.0], [64.4, 176.0], [64.5, 176.0], [64.6, 176.0], [64.7, 176.0], [64.8, 177.0], [64.9, 177.0], [65.0, 177.0], [65.1, 177.0], [65.2, 177.0], [65.3, 177.0], [65.4, 177.0], [65.5, 177.0], [65.6, 177.0], [65.7, 177.0], [65.8, 178.0], [65.9, 178.0], [66.0, 178.0], [66.1, 178.0], [66.2, 178.0], [66.3, 178.0], [66.4, 178.0], [66.5, 178.0], [66.6, 178.0], [66.7, 178.0], [66.8, 178.0], [66.9, 178.0], [67.0, 178.0], [67.1, 179.0], [67.2, 179.0], [67.3, 179.0], [67.4, 179.0], [67.5, 179.0], [67.6, 179.0], [67.7, 179.0], [67.8, 179.0], [67.9, 179.0], [68.0, 179.0], [68.1, 179.0], [68.2, 180.0], [68.3, 180.0], [68.4, 180.0], [68.5, 180.0], [68.6, 180.0], [68.7, 180.0], [68.8, 180.0], [68.9, 180.0], [69.0, 180.0], [69.1, 180.0], [69.2, 180.0], [69.3, 180.0], [69.4, 180.0], [69.5, 180.0], [69.6, 181.0], [69.7, 181.0], [69.8, 181.0], [69.9, 181.0], [70.0, 181.0], [70.1, 181.0], [70.2, 181.0], [70.3, 181.0], [70.4, 181.0], [70.5, 181.0], [70.6, 182.0], [70.7, 182.0], [70.8, 182.0], [70.9, 182.0], [71.0, 182.0], [71.1, 182.0], [71.2, 182.0], [71.3, 182.0], [71.4, 182.0], [71.5, 182.0], [71.6, 183.0], [71.7, 183.0], [71.8, 183.0], [71.9, 183.0], [72.0, 183.0], [72.1, 183.0], [72.2, 183.0], [72.3, 183.0], [72.4, 183.0], [72.5, 184.0], [72.6, 184.0], [72.7, 184.0], [72.8, 184.0], [72.9, 184.0], [73.0, 184.0], [73.1, 184.0], [73.2, 184.0], [73.3, 185.0], [73.4, 185.0], [73.5, 185.0], [73.6, 185.0], [73.7, 185.0], [73.8, 185.0], [73.9, 185.0], [74.0, 185.0], [74.1, 186.0], [74.2, 186.0], [74.3, 186.0], [74.4, 186.0], [74.5, 186.0], [74.6, 186.0], [74.7, 186.0], [74.8, 187.0], [74.9, 187.0], [75.0, 187.0], [75.1, 187.0], [75.2, 187.0], [75.3, 187.0], [75.4, 187.0], [75.5, 187.0], [75.6, 187.0], [75.7, 187.0], [75.8, 187.0], [75.9, 188.0], [76.0, 188.0], [76.1, 188.0], [76.2, 188.0], [76.3, 188.0], [76.4, 188.0], [76.5, 188.0], [76.6, 188.0], [76.7, 188.0], [76.8, 188.0], [76.9, 188.0], [77.0, 188.0], [77.1, 189.0], [77.2, 189.0], [77.3, 189.0], [77.4, 189.0], [77.5, 189.0], [77.6, 189.0], [77.7, 189.0], [77.8, 189.0], [77.9, 189.0], [78.0, 189.0], [78.1, 190.0], [78.2, 190.0], [78.3, 190.0], [78.4, 190.0], [78.5, 190.0], [78.6, 190.0], [78.7, 190.0], [78.8, 190.0], [78.9, 190.0], [79.0, 191.0], [79.1, 191.0], [79.2, 191.0], [79.3, 191.0], [79.4, 191.0], [79.5, 191.0], [79.6, 191.0], [79.7, 191.0], [79.8, 192.0], [79.9, 192.0], [80.0, 192.0], [80.1, 192.0], [80.2, 192.0], [80.3, 192.0], [80.4, 192.0], [80.5, 193.0], [80.6, 193.0], [80.7, 193.0], [80.8, 193.0], [80.9, 193.0], [81.0, 193.0], [81.1, 193.0], [81.2, 193.0], [81.3, 193.0], [81.4, 194.0], [81.5, 194.0], [81.6, 194.0], [81.7, 194.0], [81.8, 194.0], [81.9, 194.0], [82.0, 194.0], [82.1, 195.0], [82.2, 195.0], [82.3, 195.0], [82.4, 195.0], [82.5, 195.0], [82.6, 195.0], [82.7, 196.0], [82.8, 196.0], [82.9, 196.0], [83.0, 196.0], [83.1, 196.0], [83.2, 196.0], [83.3, 197.0], [83.4, 197.0], [83.5, 197.0], [83.6, 197.0], [83.7, 197.0], [83.8, 197.0], [83.9, 197.0], [84.0, 198.0], [84.1, 198.0], [84.2, 198.0], [84.3, 198.0], [84.4, 198.0], [84.5, 199.0], [84.6, 199.0], [84.7, 199.0], [84.8, 199.0], [84.9, 199.0], [85.0, 200.0], [85.1, 200.0], [85.2, 200.0], [85.3, 200.0], [85.4, 200.0], [85.5, 201.0], [85.6, 201.0], [85.7, 201.0], [85.8, 201.0], [85.9, 201.0], [86.0, 201.0], [86.1, 202.0], [86.2, 202.0], [86.3, 202.0], [86.4, 202.0], [86.5, 202.0], [86.6, 202.0], [86.7, 203.0], [86.8, 203.0], [86.9, 203.0], [87.0, 203.0], [87.1, 204.0], [87.2, 204.0], [87.3, 204.0], [87.4, 204.0], [87.5, 205.0], [87.6, 205.0], [87.7, 205.0], [87.8, 205.0], [87.9, 206.0], [88.0, 206.0], [88.1, 206.0], [88.2, 206.0], [88.3, 207.0], [88.4, 207.0], [88.5, 207.0], [88.6, 208.0], [88.7, 208.0], [88.8, 208.0], [88.9, 209.0], [89.0, 209.0], [89.1, 209.0], [89.2, 209.0], [89.3, 210.0], [89.4, 210.0], [89.5, 210.0], [89.6, 210.0], [89.7, 211.0], [89.8, 211.0], [89.9, 211.0], [90.0, 211.0], [90.1, 212.0], [90.2, 212.0], [90.3, 212.0], [90.4, 213.0], [90.5, 213.0], [90.6, 213.0], [90.7, 213.0], [90.8, 214.0], [90.9, 214.0], [91.0, 214.0], [91.1, 214.0], [91.2, 215.0], [91.3, 215.0], [91.4, 215.0], [91.5, 216.0], [91.6, 216.0], [91.7, 216.0], [91.8, 217.0], [91.9, 217.0], [92.0, 217.0], [92.1, 217.0], [92.2, 218.0], [92.3, 218.0], [92.4, 218.0], [92.5, 219.0], [92.6, 219.0], [92.7, 219.0], [92.8, 220.0], [92.9, 220.0], [93.0, 221.0], [93.1, 222.0], [93.2, 222.0], [93.3, 223.0], [93.4, 224.0], [93.5, 224.0], [93.6, 225.0], [93.7, 226.0], [93.8, 226.0], [93.9, 227.0], [94.0, 228.0], [94.1, 228.0], [94.2, 229.0], [94.3, 230.0], [94.4, 231.0], [94.5, 232.0], [94.6, 233.0], [94.7, 234.0], [94.8, 234.0], [94.9, 234.0], [95.0, 235.0], [95.1, 236.0], [95.2, 237.0], [95.3, 238.0], [95.4, 238.0], [95.5, 239.0], [95.6, 240.0], [95.7, 241.0], [95.8, 242.0], [95.9, 242.0], [96.0, 243.0], [96.1, 243.0], [96.2, 244.0], [96.3, 245.0], [96.4, 246.0], [96.5, 247.0], [96.6, 248.0], [96.7, 249.0], [96.8, 251.0], [96.9, 251.0], [97.0, 254.0], [97.1, 256.0], [97.2, 259.0], [97.3, 260.0], [97.4, 263.0], [97.5, 266.0], [97.6, 274.0], [97.7, 276.0], [97.8, 277.0], [97.9, 278.0], [98.0, 279.0], [98.1, 287.0], [98.2, 292.0], [98.3, 342.0], [98.4, 1029.0], [98.5, 1031.0], [98.6, 1049.0], [98.7, 1064.0], [98.8, 1077.0], [98.9, 1087.0], [99.0, 1096.0], [99.1, 1109.0], [99.2, 1113.0], [99.3, 1116.0], [99.4, 1119.0], [99.5, 1130.0], [99.6, 1136.0], [99.7, 1157.0], [99.8, 1181.0], [99.9, 1235.0], [100.0, 1280.0]], "isOverall": false, "label": "Telemetria küldés", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 7.0, "minX": 0.0, "maxY": 5697.0, "series": [{"data": [[0.0, 2801.0], [1100.0, 74.0], [1200.0, 20.0], [300.0, 7.0], [100.0, 5697.0], [200.0, 1325.0], [1000.0, 76.0]], "isOverall": false, "label": "Telemetria küldés", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 3.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 9827.0, "series": [{"data": [[0.0, 9827.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 170.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 3.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 94.50789999999974, "minX": 1.62032064E12, "maxY": 94.50789999999974, "series": [{"data": [[1.62032064E12, 94.50789999999974]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62032064E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 4.666666666666667, "minX": 2.0, "maxY": 1113.5, "series": [{"data": [[2.0, 6.75], [3.0, 4.666666666666667], [4.0, 14.333333333333334], [5.0, 15.0], [6.0, 21.666666666666668], [7.0, 7.0], [8.0, 15.6], [9.0, 37.0], [10.0, 14.5], [12.0, 18.25], [13.0, 14.5], [14.0, 43.666666666666664], [16.0, 27.0], [17.0, 41.800000000000004], [18.0, 62.099999999999994], [19.0, 13.5], [20.0, 25.666666666666668], [21.0, 27.45454545454545], [22.0, 27.2], [23.0, 20.857142857142858], [24.0, 30.916666666666664], [25.0, 25.27272727272727], [26.0, 39.5], [27.0, 29.5], [28.0, 35.1764705882353], [29.0, 23.875], [30.0, 39.35294117647059], [31.0, 31.727272727272727], [32.0, 44.8125], [33.0, 30.5], [34.0, 45.33333333333333], [35.0, 81.22222222222223], [36.0, 49.64285714285714], [37.0, 78.16], [38.0, 88.6842105263158], [39.0, 75.0], [40.0, 53.730769230769226], [41.0, 56.0], [42.0, 73.5], [43.0, 97.66666666666667], [45.0, 99.30434782608694], [46.0, 89.71428571428571], [47.0, 96.8], [48.0, 113.80952380952382], [49.0, 107.8], [50.0, 93.31818181818181], [51.0, 94.86666666666667], [52.0, 112.28], [53.0, 106.10526315789474], [55.0, 109.33333333333333], [54.0, 117.42857142857144], [56.0, 86.75], [57.0, 86.19999999999999], [58.0, 68.85714285714286], [59.0, 58.56410256410257], [60.0, 152.4516129032258], [61.0, 168.9090909090909], [62.0, 173.07142857142856], [63.0, 511.69230769230774], [64.0, 78.33333333333331], [66.0, 626.4999999999998], [67.0, 61.5], [65.0, 1113.5], [68.0, 682.3000000000001], [69.0, 546.7058823529412], [70.0, 501.0], [71.0, 102.93749999999999], [72.0, 127.125], [73.0, 64.75], [74.0, 123.82608695652175], [75.0, 116.75], [76.0, 137.05714285714282], [77.0, 127.16666666666667], [79.0, 95.9090909090909], [78.0, 114.06666666666666], [80.0, 86.09375], [83.0, 146.33333333333331], [82.0, 149.4], [81.0, 185.66666666666666], [84.0, 161.15384615384616], [85.0, 179.31578947368422], [86.0, 173.46428571428572], [87.0, 156.83333333333334], [88.0, 150.15789473684214], [90.0, 159.57142857142858], [91.0, 106.30000000000001], [89.0, 131.2352941176471], [93.0, 175.2564102564103], [95.0, 162.31818181818184], [94.0, 173.17142857142866], [92.0, 173.0], [97.0, 146.0631067961165], [99.0, 162.02], [98.0, 139.75000000000006], [96.0, 138.75], [100.0, 160.64003861469845]], "isOverall": false, "label": "Telemetria küldés", "isController": false}, {"data": [[94.50789999999974, 158.87120000000078]], "isOverall": false, "label": "Telemetria küldés-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 33168.066666666666, "minX": 1.62032064E12, "maxY": 94500.0, "series": [{"data": [[1.62032064E12, 33168.066666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62032064E12, 94500.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62032064E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 158.87120000000078, "minX": 1.62032064E12, "maxY": 158.87120000000078, "series": [{"data": [[1.62032064E12, 158.87120000000078]], "isOverall": false, "label": "Telemetria küldés", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62032064E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 158.85960000000037, "minX": 1.62032064E12, "maxY": 158.85960000000037, "series": [{"data": [[1.62032064E12, 158.85960000000037]], "isOverall": false, "label": "Telemetria küldés", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62032064E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.03670000000000001, "minX": 1.62032064E12, "maxY": 0.03670000000000001, "series": [{"data": [[1.62032064E12, 0.03670000000000001]], "isOverall": false, "label": "Telemetria küldés", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62032064E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.62032064E12, "maxY": 1280.0, "series": [{"data": [[1.62032064E12, 1280.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62032064E12, 211.20000000000073]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62032064E12, 1096.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62032064E12, 235.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62032064E12, 3.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62032064E12, 156.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62032064E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 20.5, "minX": 68.0, "maxY": 1111.0, "series": [{"data": [[537.0, 97.0], [553.0, 193.0], [580.0, 174.0], [596.0, 166.0], [616.0, 176.0], [642.0, 180.0], [663.0, 167.0], [671.0, 161.0], [698.0, 154.0], [704.0, 160.0], [734.0, 157.0], [751.0, 140.0], [749.0, 150.0], [202.0, 156.5], [68.0, 20.5], [104.0, 1111.0], [469.0, 86.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[698.0, 100.0], [751.0, 106.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 751.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 20.0, "minX": 68.0, "maxY": 1111.0, "series": [{"data": [[537.0, 97.0], [553.0, 193.0], [580.0, 174.0], [596.0, 166.0], [616.0, 176.0], [642.0, 180.0], [663.0, 167.0], [671.0, 161.0], [698.0, 154.0], [704.0, 160.0], [734.0, 157.0], [751.0, 140.0], [749.0, 150.0], [202.0, 156.5], [68.0, 20.0], [104.0, 1111.0], [469.0, 86.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[698.0, 100.0], [751.0, 106.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 751.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 166.66666666666666, "minX": 1.62032064E12, "maxY": 166.66666666666666, "series": [{"data": [[1.62032064E12, 166.66666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62032064E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.62032064E12, "maxY": 166.61666666666667, "series": [{"data": [[1.62032064E12, 166.61666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.62032064E12, 0.05]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62032064E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.62032064E12, "maxY": 166.61666666666667, "series": [{"data": [[1.62032064E12, 0.05]], "isOverall": false, "label": "Telemetria küldés-failure", "isController": false}, {"data": [[1.62032064E12, 166.61666666666667]], "isOverall": false, "label": "Telemetria küldés-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62032064E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.62032064E12, "maxY": 166.61666666666667, "series": [{"data": [[1.62032064E12, 166.61666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.62032064E12, 0.05]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62032064E12, "title": "Total Transactions Per Second"}},
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

