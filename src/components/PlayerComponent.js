import React, {useState, useEffect} from 'react';

const PlayerComponent = (props) => {

    const { playerName, playerList, setPlayerList } = props;
    const [isSaved, setIsSaved] = useState(false);
    const [scoreList, setScoreList] = useState({
        F1 : [0,0],
        F2 : [0,0],
        F3 : [0,0],
        F4 : [0,0],
        F5 : [0,0],
        F6 : [0,0],
        F7 : [0,0],
        F8 : [0,0],
        F9 : [0,0],
        F10 : [0,0,0],
    });

    // 오브젝트를 배열로 변환하여 playerList에 저장
    const ChangeObjectToArray = ()=>{
        const result = [];
        for (let i=1; i<=10; i++){
            const targetKey = `F${i}`;
            const target = scoreList[targetKey];
            result.push(target);
        }
        const player = {
            list : result,
            name : playerName
        };
        setPlayerList([...playerList, player])
    }

    // 저장된 데이터 배열에서 삭제
    const delPlayerFromList = ()=>{
        const modifiedList = playerList.filter(player=>{
            return player.name != playerName
        })
        setPlayerList(modifiedList);
    }

    // input Change Event
    const handleInputChange = (e, index)=>{
        const {name, value} = e.target;
        const frame = scoreList[name];
        const target = frame.slice();
        target[index] = Number(value);

        // 10 프레임이 아닐때
        if(name !== "F10"){
            if(target[0]+target[1]>10){
                target[index] = 0;
            }else if(value > 10) {
                target[index] = 10
            }
        // 10 프레임일때
        }else{
            if(target[0] != 10 && target[0]+target[1]>10){
                target[index] = 0;
            }else if(target[1] != 10 && target[1]+target[2]>10){
                target[index] = 0;
            }else if(value > 10){
                target[index] = 10
            }
        }
        setScoreList({
            ...scoreList, [name]: target
        })
    }

    const inputList = ()=>{

        return(
            <>
                <div style={{margin:"2px"}}>
                    <div style={{textAlign:"center"}}>1F</div>
                    <input className={"playerInput"}  name={"F1"} value={scoreList.F1[0]} onChange={(e)=>{handleInputChange(e,0)}} type={"number"} max={10} min={0}/>
                    <input className={"playerInput"}  name={"F1"} value={scoreList.F1[1]} onChange={(e)=>{handleInputChange(e,1)}} type={"number"} max={10} min={0}/>
                </div>
                <div style={{margin:"2px"}}>
                    <div style={{textAlign:"center"}}>2F</div>
                    <input className={"playerInput"}  name={"F2"} value={scoreList.F2[0]} onChange={(e)=>{handleInputChange(e,0)}} type={"number"} max={10} min={0}/>
                    <input className={"playerInput"}  name={"F2"} value={scoreList.F2[1]} onChange={(e)=>{handleInputChange(e,1)}} type={"number"} max={10} min={0}/>
                </div>
                <div style={{margin:"2px"}}>
                    <div style={{textAlign:"center"}}>3F</div>
                    <input className={"playerInput"}  name={"F3"} value={scoreList.F3[0]} onChange={(e)=>{handleInputChange(e,0)}} type={"number"} max={10} min={0}/>
                    <input className={"playerInput"}  name={"F3"} value={scoreList.F3[1]} onChange={(e)=>{handleInputChange(e,1)}} type={"number"} max={10} min={0}/>
                </div>
                <div style={{margin:"2px"}}>
                    <div style={{textAlign:"center"}}>4F</div>
                    <input className={"playerInput"}  name={"F4"} value={scoreList.F4[0]} onChange={(e)=>{handleInputChange(e,0)}} type={"number"} max={10} min={0}/>
                    <input className={"playerInput"}  name={"F4"} value={scoreList.F4[1]} onChange={(e)=>{handleInputChange(e,1)}} type={"number"} max={10} min={0}/>
                </div>
                <div style={{margin:"2px"}}>
                    <div style={{textAlign:"center"}}>5F</div>
                    <input className={"playerInput"}  name={"F5"} value={scoreList.F5[0]} onChange={(e)=>{handleInputChange(e,0)}} type={"number"} max={10} min={0}/>
                    <input className={"playerInput"}  name={"F5"} value={scoreList.F5[1]} onChange={(e)=>{handleInputChange(e,1)}} type={"number"} max={10} min={0}/>
                </div>
                <div style={{margin:"2px"}}>
                    <div style={{textAlign:"center"}}>6F</div>
                    <input className={"playerInput"}  name={"F6"} value={scoreList.F6[0]} onChange={(e)=>{handleInputChange(e,0)}} type={"number"} max={10} min={0}/>
                    <input className={"playerInput"}  name={"F6"} value={scoreList.F6[1]} onChange={(e)=>{handleInputChange(e,1)}} type={"number"} max={10} min={0}/>
                </div>
                <div style={{margin:"2px"}}>
                    <div style={{textAlign:"center"}}>7F</div>
                    <input className={"playerInput"}  name={"F7"} value={scoreList.F7[0]} onChange={(e)=>{handleInputChange(e,0)}} type={"number"} max={10} min={0}/>
                    <input className={"playerInput"}  name={"F7"} value={scoreList.F7[1]} onChange={(e)=>{handleInputChange(e,1)}} type={"number"} max={10} min={0}/>
                </div>
                <div style={{margin:"2px"}}>
                    <div style={{textAlign:"center"}}>8F</div>
                    <input className={"playerInput"}  name={"F8"} value={scoreList.F8[0]} onChange={(e)=>{handleInputChange(e,0)}} type={"number"} max={10} min={0}/>
                    <input className={"playerInput"}  name={"F8"} value={scoreList.F8[1]} onChange={(e)=>{handleInputChange(e,1)}} type={"number"} max={10} min={0}/>
                </div>
                <div style={{margin:"2px"}}>
                    <div style={{textAlign:"center"}}>9F</div>
                    <input className={"playerInput"}  name={"F9"} value={scoreList.F9[0]} onChange={(e)=>{handleInputChange(e,0)}} type={"number"} max={10} min={0}/>
                    <input className={"playerInput"}  name={"F9"} value={scoreList.F9[1]} onChange={(e)=>{handleInputChange(e,1)}} type={"number"} max={10} min={0}/>
                </div>
                <div style={{margin:"2px"}}>
                    <div style={{textAlign:"center"}}>10F</div>
                    <input className={"playerInput"}  name={"F10"} value={scoreList.F10[0]} onChange={(e)=>{handleInputChange(e,0)}} type={"number"} max={10} min={0}/>
                    <input className={"playerInput"}  name={"F10"} value={scoreList.F10[1]} onChange={(e)=>{handleInputChange(e,1)}} type={"number"} max={10} min={0}/>
                    <input className={"playerInput"}  name={"F10"} value={scoreList.F10[2]} onChange={(e)=>{handleInputChange(e,2)}} type={"number"} max={10} min={0}/>
                </div>
            </>
        )
    }

    return (
        <div>
            <div>
                {playerName}
            </div>
            <div style={{display : "flex", justifyContent:"center"}}>
                {inputList()}
                {!isSaved ? (
                    <button onClick={()=>{ChangeObjectToArray(); setIsSaved(true);}}>저장</button>
                ) : (
                    <button onClick={()=>{delPlayerFromList(); setIsSaved(false);}}>취소</button>
                ) }
            </div>
        </div>
    );
};

export default PlayerComponent;
