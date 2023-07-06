var findTheCity = function (n, edges, distanceThreshold) {

  // step 1 : 做出一個 n*n 的 matrix ，代表點對點的距離
  const graph = Array.from({ length: n }, () => Array(n).fill(Infinity))

  /*
  [
    [ Infinity, Infinity, Infinity, Infinity ],
    [ Infinity, Infinity, Infinity, Infinity ],
    [ Infinity, Infinity, Infinity, Infinity ],
    [ Infinity, Infinity, Infinity, Infinity ]
  ]  
  */

  // step2 : 建立初始的鄰接矩陣，將所有邊的權重填入
  for (const [from, to, weight] of edges) {
    graph[from][to] = weight
    graph[to][from] = weight
  }

  /*
  [
    [ Infinity, 3       , Infinity, Infinity ],
    [ 3       , Infinity, 1       , 4        ],
    [ Infinity, 1       , Infinity, 1        ],
    [ Infinity, 4       , 1       , Infinity ]
  ]
  */

  // step3 : 使用 Floyd-Warshall 算法計算任意兩點之間的最短路徑
  for (let k = 0; k < n; k++) {  // 將每個節點都做為"中間節點"，檢查所有點到點距離
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j])
      }
    }
  }

  /*
  [ 
    [ 6, 3, 4, 5 ], // city0 到各城市的距離
    [ 3, 2, 1, 2 ], // city1 到各城市的距離
    [ 4, 1, 2, 1 ], // city2 到各城市的距離
    [ 5, 2, 1, 2 ]  // city3 到各城市的距離
  ]
  */

 // step 4 : 遍歷每個城市，統計可達城市的數量
  let minCities = Infinity
  let result = -1

  for (let i = 0; i < n; i++) {
    let reachableCities = 0
    
    for (let j = 0; j < n; j++) {
      if (graph[i][j] <= distanceThreshold && i !== j) {
        reachableCities++
      }
    }

    // 更新最小可達城市數量和結果
    if (reachableCities <= minCities) {
      minCities = reachableCities
      result = i
    }
  }

  return result
}