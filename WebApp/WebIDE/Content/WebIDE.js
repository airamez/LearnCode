var Input = { 
    PrepareInput: function () {
        Input._inputContent = $('#input').val();
        Input._currentIndex = 0;
    },

    Read: function() {
        if (Input._currentIndex >= Input._inputContent.length) {
            alert("Nothing left to read!");
        }
        var space = Input._inputContent.indexOf(" ", Input._currentIndex);
        var inputValue = null;
        if (space == -1) {
            inputValue = Input._inputContent.substring(Input._currentIndex);
            Input._currentIndex = Input._inputContent.length;
        } else {
            inputValue = Input._inputContent.substring(Input._currentIndex, space);
            Input._currentIndex = space + 1;
        }
        return inputValue;
        
    },

    ReadLine: function () {
        if (Input._currentIndex >= Input._inputContent.length) {
            alert("Nothing left to read!");
        }
        var lineBreak = Input._inputContent.indexOf('\n', Input._currentIndex);
        var line;
        if (lineBreak == -1) {
            line = Input._inputContent.substring(Input._currentIndex);
            Input._currentIndex = Input._inputContent.length;
        } else {
            line = Input._inputContent.substring(Input._currentIndex, lineBreak);
            Input._currentIndex = lineBreak + 1;
        }
        return line;
    },
    
    ReadArray: function () {
        var line = Input.ReadLine();
        var inputArray = line.split(" ");
        return inputArray;
    },
}

Input._inputContent;
Input._currentIndex;

var Output = { 
    
    WriteLine: function(content) {
        Output.Write(content);
        Output._output.append("\n");
    },
    
    Write: function (content) {
        if (content instanceof Array) {
            for (var i = 0; i < content.length; i++) {
                Output._output.append(content[i]);
                if (i != content.length - 1) {
                    Output._output.append(",");
                }
            }
        } else {
            Output._output.append(content);
        }
    },
    
    PreapreOutput: function() {
        Output._output = $('#output');
        Output._output.empty();
    }
}

Output._output;

var Code =  {
    
    Run: function () {
        var code = editor.getValue();
        Input.PrepareInput();
        Output.PreapreOutput();
        eval(code);
    },
    
    Clear: function () {
        editor.setValue('');
        $('#code').empty();
    }
}