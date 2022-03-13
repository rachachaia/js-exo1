var Nbr = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

for (var R = 1; R < Nbr.length; R++)
    for (var C = 0; C < R; C++)
        if (Nbr[R]<Nbr[C]) 
        {
          var Z = Nbr[R];
          Nbr[R] = Nbr[C];
          Nbr[C] = Z;
        }

console.log(Nbr);
