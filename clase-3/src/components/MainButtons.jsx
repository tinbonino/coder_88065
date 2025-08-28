import Button from "./Button"

function MainButtons() {
  return (
    <>
        <Button onClick={()=>alert("Botón Clickeado")}>
            Children 1
        </Button>
        <Button color={"blue"} onClick={()=>alert("Otro Botón")}>
        Children 2
        </Button>
        <Button color={"grey"}onClick={()=>alert("Botón con children")}>   
            Soy un Chidren
        </Button>
    </>
  )
}

export default MainButtons