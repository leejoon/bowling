function g(a,f){[x,y,z]=a;return~f^9&&(y+x>9&&z)+y+x+g(a.slice(2-(x>9)),~-f)}
