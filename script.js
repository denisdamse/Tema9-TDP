let dimensiuneBloc=75;
let matriceTabla=[];
let v=[];
function setup()
{
    createCanvas(600,600);
    chessTable.board();
}
function draw()
{
    
}
const chessTable={ 
    board: function()
    {
        for (let i = 0; i < 8; i++) 
        {
            matriceTabla[i]=[];
            for (let j = 0; j < 8; j++) 
            {
                matriceTabla[i][j]={
                    coordonataX: i*dimensiuneBloc,
                    coordonataY: j*dimensiuneBloc,
                    culoare: function(){
                        if((i%2!=0 && j%2!=0) || (i%2==0 && j%2==0))
                            {
                                return "white";
                            }
                        else
                            {
                                return "black";
                            }
                        },
                    ifPawn: random([true,false]),
                }
                fill(matriceTabla[i][j].culoare());
                rect(matriceTabla[i][j].coordonataX,matriceTabla[i][j].coordonataY,dimensiuneBloc,dimensiuneBloc);
                if(matriceTabla[i][j].ifPawn==true)
                chessTable.pawn(i*dimensiuneBloc+dimensiuneBloc/2,j*dimensiuneBloc+dimensiuneBloc/2,matriceTabla[i][j].culoare());
            }
        }
    },
    pawn: function(centerX,centerY,backColor){
        let faceDimenssion=60;
        if(backColor=="black")
        {
            stroke("white");
            circle(centerX,centerY,faceDimenssion);
            arc(centerX,centerY+2,30,25,0,PI);
            circle(centerX-7,centerY-15,5);
            circle(centerX+7,centerY-15,5);
        }
        else
        {
            stroke("black");
            circle(centerX,centerY,faceDimenssion);
            arc(centerX,centerY+2,30,25,0,PI);
            circle(centerX-7,centerY-15,5);
            circle(centerX+7,centerY-15,5);
        }
    },
    randomPawns: function(){        
        
        for(let k=0;k<16;k++)
        {
            v[k]=[];
            let randomNumberLinie=random([0,1,2,3,4,5,6,7]);
            let randomNumberColoana=random([0,1,2,3,4,5,6,7]);
            for(let r=0;r<=k;r++)
            {
                if(randomNumberLinie==v[r][0] && randomNumberColoana==v[r][1])
                {
                    while(randomNumberLinie==v[r][0] && randomNumberColoana==v[r][1])
                    {
                        randomNumberLinie=random([0,1,2,3,4,5,6,7]);
                        randomNumberColoana=random([0,1,2,3,4,5,6,7]);
                    }
                }
            }
            v[k][0]=randomNumberLinie;
            v[k][1]=randomNumberColoana;
        }
            for(let n=0;n<16;n++)
            {
                let g=v[n][0];
                let h=v[n][1];
                this.board().matriceTabla[g][h].ifPawn=true;
            }
    }
}