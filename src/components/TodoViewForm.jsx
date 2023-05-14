import React from 'react';
import ReactDOM from "react-dom";
function TodoViewForm() {
    return (
        <div>
            <p>todo一覧</p>
            <form name="todoviewform" id="todoviewform">
                <div>
                    <div id="todoview">
                        <div className="todos" id="div-breakfast">
                            <input type="checkbox" id="breakfast" className="todoinput" name="breakfast" checked />
                            <label htmlFor="breakfast">朝ごはん</label>
                        </div>
                        <div className="todos" id="div-lunch">
                            <input type="checkbox" id="lunch" className="todoinput" name="lunch" checked />
                            <label htmlFor="lunch">昼ごはん</label>
                        </div>
                        <div className="todos" id="div-dinner">
                            <input type="checkbox" id="dinner" className="todoinput" name="dinner" checked />
                            <label htmlFor="dinner">夜ごはん</label>
                        </div>
                        <div id="last"></div>
                    </div>
                    <button type="submit" id="deletebtn">削除</button>
                </div>
            </form>
        </div>
    )
}

export default TodoViewForm;