require "jsduck/tag/tag"
require "jsduck/doc/subproperties"

module JsDuck::Tag
  class Param < Tag
    def initialize
      @pattern = "param"
      @key = :param
    end

    # @param {Type} [name=default] (optional) ...
    def parse(p)
      tag = p.standard_tag({:tagname => :param, :type => true, :name => true})
      tag[:optional] = true if parse_optional(p)
      tag[:doc] = :multiline
      tag
    end

    def parse_optional(p)
      p.hw.match(/\(optional\)/i)
    end

    def process_doc(h, tags, pos)
      h[:params] = JsDuck::Doc::Subproperties.nest(tags, pos)
    end
  end
end