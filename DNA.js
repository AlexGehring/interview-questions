function DNAStrand (DNA){
    return DNA.replace(/./g, function(i){
      return DNAStrand.pairs[i]})
    }
// regex /./ matches any character except line breaks
//replace syntax str.replace(regex|substr, NewSubstr|function)
    DNAStrand.pairs = {
      A: 'T', T: 'A', C: 'G', G: 'C'}

DNAStrand("ATTGC");
//should return "TAACG"
