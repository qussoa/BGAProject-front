import React,{useState,useEffect} from "react"
import axios from "axios"


const RankComponent = (props)=>{

    // 랭킹을 보여주는 화면
    const {goMain} = props
    const [rankList, setRankList] = useState([]);

    // 랭킹 데이터를 서버에 요청 함
    const getRankData = ()=> {
        axios({
            url: "http://localhost:8080/bow/rank",
            method: "get",
        }).then(result => {
            setRankList(result.data)
        })
    }

    useEffect(()=>{
        getRankData();
    },[])

    return (
        <div className={"container"}>
            <div className={"centerWrapper"}>
                <h2>순위 기록</h2>
            </div>
            <div className={"centerWrapper"}>
                <table style={{textAlign:"center"}}>
                    <thead>
                        <tr>
                            <th>순위</th>
                            <th>이름</th>
                            <th>점수</th>
                            <th>날짜</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rankList.map((result,index)=>{
                                
                                return (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{result.b_name}</td>
                                        <td>{result.b_tot_score}</td>
                                        <td>{result.b_play_date}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className={"centerWrapper"}>
                <button onClick={goMain}>메인으로</button>
            </div>
        </div>
    )
}

export default RankComponent;

